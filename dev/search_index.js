var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = HGF","category":"page"},{"location":"#HGF","page":"Home","title":"HGF","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for HGF.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [HGF]","category":"page"},{"location":"#HGF.calculate_auxiliary_prediction_precision-Tuple{HGF.AbstractNode}","page":"Home","title":"HGF.calculate_auxiliary_prediction_precision","text":"calculate_auxiliary_prediction_precision(self::AbstractNode)\n\nCalculates a node's auxiliary prediction precision.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_mean-Tuple{HGF.AbstractNode, Any, Any}","page":"Home","title":"HGF.calculate_posterior_mean","text":"calculate_posterior_mean(self::AbstractNode, value_children, volatility_children)\n\nCalculates a node's posterior mean.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_mean_vape-Tuple{AbstractFloat, HGF.AbstractNode, Any}","page":"Home","title":"HGF.calculate_posterior_mean_vape","text":"calculate_posterior_mean_vape(\n    posterior_mean::AbstractFloat,\n    self::AbstractNode,\n    value_children::Any)\n\nCalculates a node's posterior mean for a VAPE coupling.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_mean_vope-Tuple{AbstractFloat, HGF.AbstractNode, Any}","page":"Home","title":"HGF.calculate_posterior_mean_vope","text":"calculate_posterior_mean_vope(\n    posterior_mean::AbstractFloat,\n    self::AbstractNode,\n    volatility_children::Any)\n\nCalculates a node's posterior mean for a VOPE coupling.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_precision-Tuple{HGF.AbstractNode, Any, Any}","page":"Home","title":"HGF.calculate_posterior_precision","text":"calculate_posterior_precision(\n    self::AbstractNode,\n    value_children,\n    volatility_children)\n\nCalculates a node's posterior precision.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_precision_vape-Tuple{AbstractFloat, HGF.AbstractNode, Any}","page":"Home","title":"HGF.calculate_posterior_precision_vape","text":"calculate_posterior_precision_vape(\n    posterior_precision::AbstractFloat,\n    self::AbstractNode,\n    value_children::Any)\n\nCalculates a node's posterior precision for a VAPE coupling.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_precision_vope-Tuple{AbstractFloat, HGF.AbstractNode, Any}","page":"Home","title":"HGF.calculate_posterior_precision_vope","text":"calculate_posterior_precision_vope(\n    posterior_precision::AbstractFloat,\n    self::AbstractNode,\n    volatility_children::Any)\n\nCalculates a node's posterior precision for a VOPE coupling.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_posterior_precision_vope_helper-Tuple{AbstractFloat, AbstractFloat, AbstractFloat}","page":"Home","title":"HGF.calculate_posterior_precision_vope_helper","text":"calculate_posterior_precision_vope_helper(\n    auxiliary_prediction_precision::AbstractFloat,\n    child_volatility_coupling::AbstractFloat,\n    child_volatility_prediction_error::AbstractFloat)\n\nHelper function which calculates the additive term for updating posterior precision in a VOPE coupling.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_prediction_mean-Tuple{HGF.AbstractNode, Vector{HGF.StateNode}}","page":"Home","title":"HGF.calculate_prediction_mean","text":"calculate_prediction_mean(self::AbstractNode, value_parent::Vector{StateNode})\n\nCalculates a node's prediction mean.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_prediction_precision-Tuple{HGF.AbstractNode}","page":"Home","title":"HGF.calculate_prediction_precision","text":"calculate_prediction_precision(self::AbstractNode)\n\nCalculates a node's prediction precision.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_prediction_precision-Tuple{HGF.InputNode}","page":"Home","title":"HGF.calculate_prediction_precision","text":"calculate_prediction_precision(self::InputNode)\n\nCalculates an input node's prediction precision.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_prediction_volatility-Tuple{HGF.AbstractNode, Vector{HGF.StateNode}}","page":"Home","title":"HGF.calculate_prediction_volatility","text":"calculate_prediction_volatility(self::AbstractNode,  volatility_parents::Vector{StateNode})\n\nCalculates a node's prediction volatility.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_value_prediction_error-Tuple{HGF.AbstractNode}","page":"Home","title":"HGF.calculate_value_prediction_error","text":"calculate_value_prediction_error(self::AbstractNode)\n\nCalculate's a state node's value prediction error.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_value_prediction_error-Tuple{HGF.InputNode, Vector{HGF.StateNode}}","page":"Home","title":"HGF.calculate_value_prediction_error","text":"calculate_value_prediction_error(self::InputNode, value_parents::Vector{StateNode})\n\nCalculate's an input node's value prediction error.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_volatility_prediction_error-Tuple{HGF.AbstractNode}","page":"Home","title":"HGF.calculate_volatility_prediction_error","text":"calculate_volatility_prediction_error(self::AbstractNode)\n\nCalculates a state node's volatility prediction error.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.calculate_volatility_prediction_error-Tuple{HGF.InputNode, Vector{HGF.StateNode}}","page":"Home","title":"HGF.calculate_volatility_prediction_error","text":"calculate_volatility_prediction_error(self::InputNode, value_parents::Vector{StateNode})\n\nCalculates an input node's volatility prediction error.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.init_HGF","page":"Home","title":"HGF.init_HGF","text":"function init_HGF(\n    default_params,\n    input_nodes,\n    state_nodes,\n    child_parent_relations,\n    update_order = false,\n)\n\nFunction for initializing the structure of an HGF model.\n\n\n\n\n\n","category":"function"},{"location":"#HGF.update_node-Tuple{HGF.InputNode, AbstractFloat}","page":"Home","title":"HGF.update_node","text":"update_node(self::InputNode, input::AbstractFloat)\n\nFull update function for a continuous input node.\n\n\n\n\n\n","category":"method"},{"location":"#HGF.update_node-Tuple{HGF.StateNode}","page":"Home","title":"HGF.update_node","text":"update_node(self::StateNode)\n\nFull update function for a single node. States, parents and children are contained within the node.\n\n\n\n\n\n","category":"method"}]
}
