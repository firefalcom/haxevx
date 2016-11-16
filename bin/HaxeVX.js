// Generated by Haxe 3.3.0
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() { };
Main.main = function() {
	new haxevx_vuex_examples_shoppingcart_ShoppingCartMain();
};
var haxevx_vuex_core_IVxContext = function() { };
var haxevx_vuex_core_IVxStoreContext = function() { };
haxevx_vuex_core_IVxStoreContext.__interfaces__ = [haxevx_vuex_core_IVxContext];
var haxevx_vuex_core_NoneT = function() { };
var haxevx_vuex_core_VComponent = function() { };
haxevx_vuex_core_VComponent.prototype = {
	get_props: function() {
		return this;
	}
	,get_data: function() {
		return this.$data;
	}
	,getNewProps: function() {
		return null;
	}
	,getNewData: function() {
		return null;
	}
	,Created: function() {
	}
	,Render: function() {
		return null;
	}
	,Template: function() {
		return null;
	}
	,Components: function() {
		return null;
	}
	,_toNative: function() {
		return null;
	}
};
var haxevx_vuex_core_VModule = function() { };
var haxevx_vuex_core_VxComponent = function() { };
haxevx_vuex_core_VxComponent.__super__ = haxevx_vuex_core_VComponent;
haxevx_vuex_core_VxComponent.prototype = $extend(haxevx_vuex_core_VComponent.prototype,{
	get_store: function() {
		return this.$store;
	}
});
var haxevx_vuex_core_VxStore = function() {
	this.strict = false;
};
haxevx_vuex_core_VxStore.__interfaces__ = [haxevx_vuex_core_IVxStoreContext];
haxevx_vuex_core_VxStore.prototype = {
	dispatch: function(type,payload) {
	}
	,commit: function(type,payload) {
	}
	,_toNative: function() {
		return null;
	}
	,_toNativeModule: function() {
		return null;
	}
};
var haxevx_vuex_examples_shoppingcart_ShoppingCartMain = function() {
	new haxevx_vuex_examples_shoppingcart_store_AppStore();
	new haxevx_vuex_examples_shoppingcart_components_App();
};
var haxevx_vuex_examples_shoppingcart_components_App = function() {
};
haxevx_vuex_examples_shoppingcart_components_App.__super__ = haxevx_vuex_core_VxComponent;
haxevx_vuex_examples_shoppingcart_components_App.prototype = $extend(haxevx_vuex_core_VxComponent.prototype,{
	Components: function() {
		return { 'product-list' : new haxevx_vuex_examples_shoppingcart_components_ProductListVue(), 'cart' : new haxevx_vuex_examples_shoppingcart_components_CartVue()};
	}
	,Template: function() {
		return "<div id=\"app\">\r\n\t\t\t\t<h1>Shopping Cart Example</h1>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<h2>Products</h2>\r\n\t\t\t\t<product-list></product-list>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<cart></cart>\r\n\t\t\t  </div>";
	}
});
var haxevx_vuex_examples_shoppingcart_components_CartVue = function() {
};
haxevx_vuex_examples_shoppingcart_components_CartVue.__super__ = haxevx_vuex_core_VxComponent;
haxevx_vuex_examples_shoppingcart_components_CartVue.prototype = $extend(haxevx_vuex_core_VxComponent.prototype,{
	Template: function() {
		return "<div class=\"cart\">\r\n\t\t\t\t<h2>Your Cart</h2>\r\n\t\t\t\t<p v-show=\"!products.length\"><i>Please add some products to cart.</i></p>\r\n\t\t\t\t<ul>\r\n\t\t\t\t  <li v-for=\"p in products\">\r\n\t\t\t\t\t{{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}\r\n\t\t\t\t  </li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p>Total: {{ total | currency }}</p>\r\n\t\t\t\t<p><button :disabled=\"!products.length\" @click=\"checkout(products)\">Checkout</button></p>\r\n\t\t\t\t<p v-show=\"checkoutStatus\">Checkout {{ checkoutStatus }}.</p>\r\n\t\t\t  </div>";
	}
});
var haxevx_vuex_examples_shoppingcart_components_ProductListVue = function() {
};
haxevx_vuex_examples_shoppingcart_components_ProductListVue.__super__ = haxevx_vuex_core_VxComponent;
haxevx_vuex_examples_shoppingcart_components_ProductListVue.prototype = $extend(haxevx_vuex_core_VxComponent.prototype,{
	get_products: function() {
		return this.$store.products.get_allProducts();
	}
	,addToCart: function(p) {
		haxevx_vuex_examples_shoppingcart_components_ProductListVue.mutator.addToCart(p);
	}
	,Created: function() {
		haxevx_vuex_examples_shoppingcart_components_ProductListVue.dispatcher.getAllProducts();
	}
	,Template: function() {
		return "<ul>\r\n\t\t\t<li v-for=\"p in products\">\r\n\t\t\t  {{ p.title }} - {{ p.price | currency }}\r\n\t\t\t  <br>\r\n\t\t\t  <button\r\n\t\t\t\t:disabled=\"!p.inventory\"\r\n\t\t\t\t@click=\"addToCart(p)\">\r\n\t\t\t\tAdd to cart\r\n\t\t\t  </button>\r\n\t\t\t</li>\r\n\t\t</ul>";
	}
});
var haxevx_vuex_examples_shoppingcart_modules_Cart = function() {
	this.state = { added : [], checkoutStatus : null, lastCheckout : null};
};
haxevx_vuex_examples_shoppingcart_modules_Cart.getCheckoutStatus = function(state) {
	return state.checkoutStatus;
};
haxevx_vuex_examples_shoppingcart_modules_Cart.__super__ = haxevx_vuex_core_VModule;
haxevx_vuex_examples_shoppingcart_modules_Cart.prototype = $extend(haxevx_vuex_core_VModule.prototype,{
	get_checkoutStatus: function() {
		return haxevx_vuex_examples_shoppingcart_modules_Cart.getCheckoutStatus(this.state);
	}
});
var haxevx_vuex_examples_shoppingcart_modules_CartDispatcher = function() { };
haxevx_vuex_examples_shoppingcart_modules_CartDispatcher.prototype = {
	checkout: function(payload) {
		var _gthis = this;
		return function(context,payload1) {
			context.state.added.concat([]);
			_gthis.mutator.checkoutRequest();
		};
	}
};
var haxevx_vuex_examples_shoppingcart_store_AppMutator = function() { };
haxevx_vuex_examples_shoppingcart_store_AppMutator.prototype = {
	addToCart: function(payload) {
		return null;
	}
	,checkoutRequest: function() {
		return null;
	}
	,checkoutSuccess: function() {
		return null;
	}
	,checkoutFailure: function(payload) {
		return null;
	}
	,receiveProducts: function(payload) {
		return null;
	}
};
var haxevx_vuex_examples_shoppingcart_modules_CartMutator = function() { };
haxevx_vuex_examples_shoppingcart_modules_CartMutator.__super__ = haxevx_vuex_examples_shoppingcart_store_AppMutator;
haxevx_vuex_examples_shoppingcart_modules_CartMutator.prototype = $extend(haxevx_vuex_examples_shoppingcart_store_AppMutator.prototype,{
	addToCart: function(payload) {
		return function(state,payload1) {
			state.lastCheckout = null;
		};
	}
	,checkoutRequest: function() {
		return function(state) {
			state.added = [];
			state.checkoutStatus = null;
		};
	}
	,checkoutSuccess: function() {
		return function(state) {
			state.added = [];
			state.checkoutStatus = "successful";
		};
	}
	,checkoutFailure: function(payload) {
		return function(state,payload1) {
			state.added = payload1.savedCartItems;
			state.checkoutStatus = "failed";
		};
	}
});
var haxevx_vuex_examples_shoppingcart_modules_Products = function() {
	this.state = new haxevx_vuex_examples_shoppingcart_modules_ProductListModel();
};
haxevx_vuex_examples_shoppingcart_modules_Products.getAllProducts = function(state) {
	return state.all;
};
haxevx_vuex_examples_shoppingcart_modules_Products.__super__ = haxevx_vuex_core_VModule;
haxevx_vuex_examples_shoppingcart_modules_Products.prototype = $extend(haxevx_vuex_core_VModule.prototype,{
	get_allProducts: function() {
		return haxevx_vuex_examples_shoppingcart_modules_Products.getAllProducts(this.state);
	}
});
var haxevx_vuex_examples_shoppingcart_modules_ProductListDispatcher = function() { };
haxevx_vuex_examples_shoppingcart_modules_ProductListDispatcher.prototype = {
	getAllProducts: function() {
		return function(context) {
		};
	}
};
var haxevx_vuex_examples_shoppingcart_modules_ProductListModel = function() {
	this.all = [];
};
var haxevx_vuex_examples_shoppingcart_modules_ProductListMutator = function() { };
haxevx_vuex_examples_shoppingcart_modules_ProductListMutator.__super__ = haxevx_vuex_examples_shoppingcart_store_AppMutator;
haxevx_vuex_examples_shoppingcart_modules_ProductListMutator.prototype = $extend(haxevx_vuex_examples_shoppingcart_store_AppMutator.prototype,{
	receiveProducts: function(payload) {
		return function(state,payload1) {
			state.all = payload1;
		};
	}
	,addToCart: function(payload) {
		return function(state,payload1) {
			var filtered = state.all.filter(function(p) {
				return p.id == payload1.id;
			});
			if(filtered.length > 0) {
				filtered[0].inventory--;
			}
		};
	}
});
var haxevx_vuex_examples_shoppingcart_store_AppActions = function() { };
haxevx_vuex_examples_shoppingcart_store_AppActions.prototype = {
	checkout: function(product) {
		return function(context,payload) {
			if(product.inventory > 0) {
				haxevx_vuex_examples_shoppingcart_store_AppActions.mutator.addToCart({ id : product.id});
			}
		};
	}
};
var haxevx_vuex_examples_shoppingcart_store_AppGetters = function() { };
haxevx_vuex_examples_shoppingcart_store_AppGetters.getCartProducts = function(state) {
	state.cart.added.map(function(cp) {
		var chk = state.products.all.filter(function(p) {
			return p.id == cp.id;
		});
		if(chk.length > 0) {
			var product = chk[0];
			return { title : product.title, price : product.price, quantity : cp.quantity};
		} else {
			return null;
		}
	});
	return null;
};
haxevx_vuex_examples_shoppingcart_store_AppGetters.__super__ = haxevx_vuex_core_VModule;
haxevx_vuex_examples_shoppingcart_store_AppGetters.prototype = $extend(haxevx_vuex_core_VModule.prototype,{
	get_cartProducts: function() {
		return haxevx_vuex_examples_shoppingcart_store_AppGetters.getCartProducts(this.state);
	}
});
var haxevx_vuex_examples_shoppingcart_store_AppStore = function() {
	haxevx_vuex_core_VxStore.call(this);
	this.state = new haxevx_vuex_examples_shoppingcart_store_AppState();
	this.strict = true;
};
haxevx_vuex_examples_shoppingcart_store_AppStore.__super__ = haxevx_vuex_core_VxStore;
haxevx_vuex_examples_shoppingcart_store_AppStore.prototype = $extend(haxevx_vuex_core_VxStore.prototype,{
});
var haxevx_vuex_examples_shoppingcart_store_AppState = function() {
};
haxevx_vuex_examples_shoppingcart_components_App.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.components.App\" params=\"\">\n\t<extends path=\"haxevx.vuex.core.VxComponent\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppStore\"/>\n\t\t<c path=\"haxevx.vuex.core.NoneT\"/>\n\t\t<c path=\"haxevx.vuex.core.NoneT\"/>\n\t</extends>\n\t<Components set=\"method\" line=\"22\" override=\"1\"><f a=\"\"><d><c path=\"haxevx.vuex.core.VComponent\">\n\t<d/>\n\t<d/>\n</c></d></f></Components>\n\t<Template public=\"1\" set=\"method\" line=\"29\" override=\"1\"><f a=\"\"><c path=\"String\"/></f></Template>\n\t<new public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><x path=\"Void\"/></f></new>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_components_ProductListVue.__meta__ = { statics : { mutator : { mutator : null}, dispatcher : { action : null}}};
haxevx_vuex_examples_shoppingcart_modules_Cart.__meta__ = { fields : { action : { mutator : null}, mutator : { mutator : null}}};
haxevx_vuex_examples_shoppingcart_modules_Cart.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.modules.Cart\" params=\"\">\n\t<extends path=\"haxevx.vuex.core.VModule\"><t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/></extends>\n\t<getCheckoutStatus set=\"method\" line=\"36\" static=\"1\"><f a=\"state\">\n\t<t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/>\n\t<c path=\"String\"/>\n</f></getCheckoutStatus>\n\t<checkoutStatus public=\"1\" get=\"accessor\" set=\"null\"><c path=\"String\"/></checkoutStatus>\n\t<get_checkoutStatus set=\"method\" line=\"32\"><f a=\"\"><c path=\"String\"/></f></get_checkoutStatus>\n\t<action>\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.CartDispatcher\"><t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/></c>\n\t\t<meta><m n=\"mutator\"/></meta>\n\t</action>\n\t<mutator>\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.CartMutator\"/>\n\t\t<meta><m n=\"mutator\"/></meta>\n\t</mutator>\n\t<new public=\"1\" set=\"method\" line=\"19\"><f a=\"\"><x path=\"Void\"/></f></new>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_modules_CartDispatcher.__meta__ = { fields : { mutator : { mutator : null}}};
haxevx_vuex_examples_shoppingcart_store_AppMutator.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator\" params=\"S\">\n\t<addToCart public=\"1\" params=\"P\" set=\"method\" line=\"22\"><f a=\"payload\">\n\t<c path=\"addToCart.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator.S\"/>\n\t\t<c path=\"addToCart.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></addToCart>\n\t<checkoutRequest public=\"1\" set=\"method\" line=\"26\"><f a=\"\"><f a=\"\">\n\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator.S\"/>\n\t<x path=\"Void\"/>\n</f></f></checkoutRequest>\n\t<checkoutSuccess public=\"1\" set=\"method\" line=\"29\"><f a=\"\"><f a=\"\">\n\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator.S\"/>\n\t<x path=\"Void\"/>\n</f></f></checkoutSuccess>\n\t<checkoutFailure public=\"1\" params=\"P\" set=\"method\" line=\"32\"><f a=\"payload\">\n\t<c path=\"checkoutFailure.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator.S\"/>\n\t\t<c path=\"checkoutFailure.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></checkoutFailure>\n\t<receiveProducts public=\"1\" params=\"P\" set=\"method\" line=\"36\"><f a=\"payload\">\n\t<c path=\"receiveProducts.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator.S\"/>\n\t\t<c path=\"receiveProducts.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></receiveProducts>\n\t<meta><m n=\":rtti\"/></meta>\n</class>";
haxevx_vuex_examples_shoppingcart_modules_CartMutator.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.modules.CartMutator\" params=\"\" module=\"haxevx.vuex.examples.shoppingcart.modules.Cart\">\n\t<extends path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator\"><t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/></extends>\n\t<addToCart public=\"1\" params=\"P\" set=\"method\" line=\"77\" override=\"1\"><f a=\"payload\">\n\t<c path=\"addToCart.P\"/>\n\t<f a=\":\">\n\t\t<t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/>\n\t\t<c path=\"addToCart.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></addToCart>\n\t<checkoutRequest public=\"1\" set=\"method\" line=\"96\" override=\"1\"><f a=\"\"><f a=\"\">\n\t<t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/>\n\t<x path=\"Void\"/>\n</f></f></checkoutRequest>\n\t<checkoutSuccess public=\"1\" set=\"method\" line=\"103\" override=\"1\"><f a=\"\"><f a=\"\">\n\t<t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/>\n\t<x path=\"Void\"/>\n</f></f></checkoutSuccess>\n\t<checkoutFailure public=\"1\" params=\"P\" set=\"method\" line=\"110\" override=\"1\"><f a=\"payload\">\n\t<c path=\"checkoutFailure.P\"/>\n\t<f a=\":\">\n\t\t<t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/>\n\t\t<c path=\"checkoutFailure.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></checkoutFailure>\n</class>";
haxevx_vuex_examples_shoppingcart_modules_Products.__meta__ = { fields : { mutator : { mutator : null}}};
haxevx_vuex_examples_shoppingcart_modules_Products.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.modules.Products\" params=\"\">\n\t<extends path=\"haxevx.vuex.core.VModule\"><c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/></extends>\n\t<getAllProducts set=\"method\" line=\"30\" static=\"1\"><f a=\"state\">\n\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/>\n\t<c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInStore\"/></c>\n</f></getAllProducts>\n\t<allProducts public=\"1\" get=\"accessor\" set=\"null\"><c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInStore\"/></c></allProducts>\n\t<get_allProducts set=\"method\" line=\"26\"><f a=\"\"><c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInStore\"/></c></f></get_allProducts>\n\t<mutator>\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListMutator\"/>\n\t\t<meta><m n=\"mutator\"/></meta>\n\t</mutator>\n\t<new public=\"1\" set=\"method\" line=\"16\"><f a=\"\"><x path=\"Void\"/></f></new>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_modules_ProductListDispatcher.__meta__ = { statics : { mutator : { mutator : null}}};
haxevx_vuex_examples_shoppingcart_modules_ProductListMutator.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListMutator\" params=\"\" module=\"haxevx.vuex.examples.shoppingcart.modules.Products\">\n\t<extends path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator\"><c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/></extends>\n\t<receiveProducts public=\"1\" params=\"P\" set=\"method\" line=\"72\" override=\"1\"><f a=\"payload\">\n\t<c path=\"receiveProducts.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/>\n\t\t<c path=\"receiveProducts.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></receiveProducts>\n\t<addToCart public=\"1\" params=\"P\" set=\"method\" line=\"78\" override=\"1\"><f a=\"payload\">\n\t<c path=\"addToCart.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/>\n\t\t<c path=\"addToCart.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></addToCart>\n</class>";
haxevx_vuex_examples_shoppingcart_store_AppActions.__meta__ = { statics : { mutator : { mutator : null}}};
haxevx_vuex_examples_shoppingcart_store_AppActions.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.store.AppActions\" params=\"S\">\n\t<mutator static=\"1\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppMutator\"><d/></c>\n\t\t<meta><m n=\"mutator\"/></meta>\n\t</mutator>\n\t<checkout public=\"1\" params=\"P\" set=\"method\" line=\"15\"><f a=\"product\">\n\t<c path=\"checkout.P\"/>\n\t<f a=\":\">\n\t\t<c path=\"haxevx.vuex.core.IVxStoreContext\"><c path=\"haxevx.vuex.examples.shoppingcart.store.AppActions.S\"/></c>\n\t\t<c path=\"checkout.P\"/>\n\t\t<x path=\"Void\"/>\n\t</f>\n</f></checkout>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_store_AppGetters.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.store.AppGetters\" params=\"S\">\n\t<extends path=\"haxevx.vuex.core.VModule\"><c path=\"haxevx.vuex.examples.shoppingcart.store.AppGetters.S\"/></extends>\n\t<getCartProducts public=\"1\" params=\"S\" set=\"method\" line=\"18\" static=\"1\"><f a=\"state\">\n\t<c path=\"getCartProducts.S\"/>\n\t<c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInCart\"/></c>\n</f></getCartProducts>\n\t<cartProducts public=\"1\" get=\"accessor\" set=\"null\"><c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInCart\"/></c></cartProducts>\n\t<get_cartProducts set=\"method\" line=\"14\"><f a=\"\"><c path=\"Array\"><t path=\"haxevx.vuex.examples.shoppingcart.store.ProductInCart\"/></c></f></get_cartProducts>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_store_AppStore.__meta__ = { fields : { actions : { action : null}, getters : { getter : null}, cart : { module : null}, products : { module : null}}};
haxevx_vuex_examples_shoppingcart_store_AppStore.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.store.AppStore\" params=\"\">\n\t<extends path=\"haxevx.vuex.core.VxStore\"><c path=\"haxevx.vuex.examples.shoppingcart.store.AppState\"/></extends>\n\t<actions public=\"1\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppActions\"><c path=\"haxevx.vuex.examples.shoppingcart.store.AppState\"/></c>\n\t\t<meta><m n=\"action\"/></meta>\n\t</actions>\n\t<getters public=\"1\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.store.AppGetters\"><c path=\"haxevx.vuex.examples.shoppingcart.store.AppState\"/></c>\n\t\t<meta><m n=\"getter\"/></meta>\n\t</getters>\n\t<cart public=\"1\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.Cart\"/>\n\t\t<meta><m n=\"module\"/></meta>\n\t</cart>\n\t<products public=\"1\">\n\t\t<c path=\"haxevx.vuex.examples.shoppingcart.modules.Products\"/>\n\t\t<meta><m n=\"module\"/></meta>\n\t</products>\n\t<new public=\"1\" set=\"method\" line=\"25\"><f a=\"\"><x path=\"Void\"/></f></new>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
haxevx_vuex_examples_shoppingcart_store_AppState.__rtti = "<class path=\"haxevx.vuex.examples.shoppingcart.store.AppState\" params=\"\" module=\"haxevx.vuex.examples.shoppingcart.store.AppStore\">\n\t<cart public=\"1\" set=\"null\"><t path=\"haxevx.vuex.examples.shoppingcart.modules.CartState\"/></cart>\n\t<products public=\"1\" set=\"null\"><c path=\"haxevx.vuex.examples.shoppingcart.modules.ProductListModel\"/></products>\n\t<new public=\"1\" set=\"method\" line=\"41\"><f a=\"\"><x path=\"Void\"/></f></new>\n\t<meta>\n\t\t<m n=\":directlyUsed\"/>\n\t\t<m n=\":rtti\"/>\n\t</meta>\n</class>";
Main.main();
})();
