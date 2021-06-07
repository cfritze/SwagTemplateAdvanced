import StickyHeader from './script/sticky-header'
import QuantityFieldPlugin from './script/quantity-field.plugin'
import Rumble from './script/rumble'


window.PluginManager.register('StickyHeader',StickyHeader,'[data-sticky-header]',{
	shownOnScrollPosition: 1000,

}) 
window.PluginManager.register('QuantityField',QuantityFieldPlugin,'[data-quantity-field]') 
window.PluginManager.override('AddToCart',Rumble,'[data-add-to-cart]') 

console.info("call main.js")

// Rumble window.PluginManager.register da neu  
// ./psh.phar storefront:dev in dev umgebung,  ./psh.phar storefront:build für prod 

