package haxevx.vuex.examples.shoppingcart.components;
import haxevx.vuex.examples.shoppingcart.modules.Cart;
import haxevx.vuex.core.NoneT;
import haxevx.vuex.core.VxComponent;
import haxevx.vuex.examples.shoppingcart.modules.Cart.CartDispatcher;
import haxevx.vuex.examples.shoppingcart.modules.Cart.CartMutator;
import haxevx.vuex.examples.shoppingcart.store.AppStore;
import haxevx.vuex.examples.shoppingcart.store.ObjTypes;

/**
 * components/Cart.vue port
 * 
 * @author Glidias
 */
using Lambda;
@:rtti
class CartVue extends VxComponent<AppStore, NoneT, NoneT>
{

	public function new() 
	{
		
	}
	
	@action static var action:CartDispatcher<Dynamic>; 
	

	// Computed
	
	var total(get, never):Float;
	function get_total():Float 
	{
		return products.fold( function(p:ProductInCart, total:Float)  {
			return total + p.price * p.quantity;
		}, 0);
	}
	
	var products(get, never):Array<ProductInCart>;
	public  inline function get_products():Array<ProductInCart> {
		return store.getters.cartProducts;
	}
	
	var checkoutStatus(get, never):String;
	public inline function get_checkoutStatus():String {
		return store.cart.checkoutStatus;
	}
	
	
	// Methods
	public function checkout (products:Array<ProductInCart>) {
		action.checkout(products);
    }
	
	
	override function Template():String {
		return '<div class="cart">
				<h2>Your Cart</h2>
				<p v-show="!products.length"><i>Please add some products to cart.</i></p>
				<ul>
				  <li v-for="p in products">
					{{ p.title }} - {{ p.price  }}  (x{{ p.quantity }})
				  </li>
				</ul>
				<p>Total: {{ total  }}</p>
				<p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
				<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
			  </div>';
	}
	
	
	

	
}


