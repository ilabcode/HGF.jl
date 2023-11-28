"""
    premade_continuous_2level(config::Dict; verbose::Bool = true)

The standard 2 level continuous HGF, which filters a continuous input.
It has a continous input node u, with a single value parent x, which in turn has a single volatility parent xvol.

# Config defaults:
 - ("u", "input_noise"): -2
 - ("x", "volatility"): -2
 - ("xvol", "volatility"): -2
 - ("u", "x", "coupling_strength"): 1
 - ("x", "xvol", "coupling_strength"): 1
 - ("x", "initial_mean"): 0
 - ("x", "initial_precision"): 1
 - ("xvol", "initial_mean"): 0
 - ("xvol", "initial_precision"): 1
"""
function premade_continuous_2level(config::Dict; verbose::Bool = true)

    #Defaults
    spec_defaults = Dict(
        ("u", "input_noise") => -2,
        ("x", "volatility") => -2,
        ("x", "drift") => 0,
        ("x", "autoregression_target") => 0,
        ("x", "autoregression_strength") => 0,
        ("x", "initial_mean") => 0,
        ("x", "initial_precision") => 1,
        ("xvol", "volatility") => -2,
        ("xvol", "drift") => 0,
        ("xvol", "autoregression_target") => 0,
        ("xvol", "autoregression_strength") => 0,
        ("xvol", "initial_mean") => 0,
        ("xvol", "initial_precision") => 1,
        ("x", "xvol", "coupling_strength") => 1,
        "update_type" => EnhancedUpdate(),
    )

    #Warn the user about used defaults and misspecified keys
    if verbose
        warn_premade_defaults(spec_defaults, config)
    end

    #Merge to overwrite defaults
    config = merge(spec_defaults, config)


    #List of input nodes to create
    input_nodes = Dict(
        "name" => "u",
        "type" => "continuous",
        "input_noise" => config[("u", "input_noise")],
    )

    #List of state nodes to create
    state_nodes = [
        Dict(
            "name" => "x",
            "type" => "continuous",
            "volatility" => config[("x", "volatility")],
            "drift" => config[("x", "drift")],
            "autoregression_target" => config[("x", "autoregression_target")],
            "autoregression_strength" => config[("x", "autoregression_strength")],
            "initial_mean" => config[("x", "initial_mean")],
            "initial_precision" => config[("x", "initial_precision")],
        ),
        Dict(
            "name" => "xvol",
            "type" => "continuous",
            "volatility" => config[("xvol", "volatility")],
            "drift" => config[("xvol", "drift")],
            "autoregression_target" => config[("xvol", "autoregression_target")],
            "autoregression_strength" => config[("xvol", "autoregression_strength")],
            "initial_mean" => config[("xvol", "initial_mean")],
            "initial_precision" => config[("xvol", "initial_precision")],
        ),
    ]

    #List of child-parent relations
    edges = Dict(
        ("u", "x") => ObservationCoupling(),
        ("x", "xvol") => VolatilityCoupling(config[("x", "xvol", "coupling_strength")]),
    )

    #Initialize the HGF
    init_hgf(
        input_nodes = input_nodes,
        state_nodes = state_nodes,
        edges = edges,
        verbose = false,
        update_type = config["update_type"],
    )
end
