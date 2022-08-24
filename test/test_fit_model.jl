using ActionModels
using HGF
using Test
using Turing
using Plots
using StatsPlots

@testset "Model fitting" begin

    @testset "Continuous 2level" begin

        #Set inputs and responses
        test_input = [1.0, 2, 3, 4, 5]
        test_responses = [1.1, 2.2, 3.3, 4.4, 5.5]

        #Create HGF
        test_hgf = premade_hgf("continuous_2level")

        #Create agent
        test_agent = premade_agent("hgf_gaussian_action", test_hgf, verbose = false)

        # Set fixed parsmeters and priors for fitting
        test_fixed_params = Dict(
            ("x1", "initial_mean") => 100,
            ("x2", "initial_mean") => 1.0,
            ("x2", "initial_precision") => 600,
            ("u", "x1", "value_coupling") => 1.0,
            ("x1", "x2", "volatility_coupling") => 1.0,
            "gaussian_action_precision" => 100,
            ("x2", "evolution_rate") => -4,
            ("u", "evolution_rate") => 4,
        )

        test_param_priors = Dict(
            ("x1", "evolution_rate") => Normal(log(100.0), 4),
            ("x1", "initial_mean") => Normal(1, sqrt(100.0)),
        )

        #Fit single chain with defaults
        chain = fit_model(
            test_agent,
            test_input,
            test_responses,
            test_param_priors,
            test_fixed_params;
            verbose = false,
        )
        @test chain isa Turing.Chains

        #Fit with multiple chains and HMC
        chain = fit_model(
            test_agent,
            test_input,
            test_responses,
            test_param_priors,
            test_fixed_params;
            sampler = HMC(0.01, 5),
            n_iterations = 200,
            n_chains = 4,
            verbose = false,
        )
        @test chain isa Turing.Chains

        #Plot the parameter distribution
        parameter_distribution_plot(chain, test_param_priors)

        # Posterior predictive plot
        predictive_simulation_plot(
            chain,
            test_agent,
            test_input,
            ("x1", "posterior_mean");
            verbose = false
        )
    end


    @testset "Canonical Binary 3level" begin

        #Set inputs and responses 
        test_input = [1, 0, 0, 1, 1]
        test_responses = [1, 0, 1, 1, 0]

        #Create HGF
        test_hgf = premade_hgf("binary_3level")

        #Create agent 
        test_agent = premade_agent("hgf_binary_softmax_action", test_hgf, verbose = false)

        #Set fixed parameters and priors
        test_fixed_params = Dict(
            ("u", "category_means") => Real[0.0, 1.0],
            ("u", "input_precision") => Inf,
            ("x2", "initial_mean") => 3.0,
            ("x2", "initial_precision") => exp(2.306),
            ("x3", "initial_mean") => 3.2189,
            ("x3", "initial_precision") => exp(-1.0986),
            ("u", "x1", "value_coupling") => 1.0,
            ("x1", "x2", "value_coupling") => 1.0,
            ("x2", "x3", "volatility_coupling") => 1.0,
            ("x3", "evolution_rate") => -3,
        )

        test_param_priors = Dict(
            "softmax_action_precision" => Truncated(Normal(100, 20), 0, Inf),
            ("x2", "evolution_rate") => Normal(-7, 5),
        )

        #Fit single chain with defaults
        chain = fit_model(
            test_agent,
            test_input,
            test_responses,
            test_param_priors,
            test_fixed_params,
            verbose = false,
        )
        @test chain isa Turing.Chains

        #Fit with multiple chains and HMC
        chain = fit_model(
            test_agent,
            test_input,
            test_responses,
            test_param_priors,
            test_fixed_params,
            sampler = HMC(0.01, 5),
            n_iterations = 200,
            n_chains = 4,
            verbose = false,
        )
        @test chain isa Turing.Chains

        #Plot the parameter distribution
        parameter_distribution_plot(chain, test_param_priors)

        # Posterior predictive plot
        predictive_simulation_plot(
            chain,
            test_agent,
            test_input,
            ("x1", "posterior_mean"),
            verbose = false,
        )
    end
end