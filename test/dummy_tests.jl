#Dummy tests
@testset "Dummy tests" begin
    a = BitArray([1,0,0,1])
    @test dummy_function(2) == 4
    @test dummy_function(a) == 1
    @test dummy_function([1.,2.,3.,4.]) == 10
    @test dummy_function([6,2,3,4]) == 6
end