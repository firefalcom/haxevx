package haxevx.vuex.core;

import haxevx.vuex.native.Vue.CreateElement;
import haxevx.vuex.native.Vue.VNode;
import haxevx.vuex.native.Vue.VcPropSetting;
import haxevx.vuex.native.Vue.VueBase;
/**
 * ...
 * @author Glidias
 */
@:autoBuild(haxevx.vuex.core.VxMacros.buildComponent())
class VComponent<D, P> extends VueBase
{
	
	function new() {
		_Init();
	}
	

	function _Init():Void {  
		
	}
		
	#if !remove_props_accessor
	var _props(get, null):P;
	inline function get__props():P 
	{
		return untyped this;
	}
	#end
	
	var _vData(get, null):D;
	inline function get__vData():D 
	{
		return js.Syntax.code("this.$data");
	}
	
	
	/**
	 * Optionally override this to determine starting prop values for Unit Testing only!
	 * @return
	 */
	function PropsData():P {
		return null;
	}
	
	/**
	 * Optionally override this to determine starting data values
	 * @return
	 */
	function Data():D {
		return null;
	}
	
	// override these lifecyle hook implementations if needed
	function Created():Void {}
	function BeforeCreate():Void {}
	function BeforeDestroy():Void {}
	function Destroy():Void {}
	function BeforeMount():Void {}
	function Mounted():Void {}
	function BeforeUpdate():Void {}
	function Updated():Void {}
	function Activated():Void {}
	function Deactivated():Void {}
	

	function El():Dynamic {  // String or HTMLElement
		return null;
	}
	
	// override this implementation to use a custom render method instead to render Virtual DOM
	function Render(c:CreateElement):VNode {
		return null;
	}
	// override this implementation to use a custom template string reference or markup
	function Template():String {
		return null;
	}
	
	/**
	 *  override this register components locally. 
	 * You can optionally return an inline StringMap declaration like: `return [  'someKey'=>value1, '$someTokenisedKey'=>value2 ]` as well,
	 * which will allow you to tokenise your string-based component keys to any variables you declared, to avoid mispellings. 
	 * Remember, tokenisation isn't available for regular Dynamic object keys.
	 */
	function Components():Dynamic<VComponent<Dynamic,Dynamic>>  {
		return null;
	}
	
	
	function GetDefaultPropSettings():Dynamic<VcPropSetting> {
		return null;
	}
	
	function GetDefaultPropValues():P {
		return null;
	}

	
}
