import AddToCart from 'src/plugin/add-to-cart/add-to-cart.plugin'
import DomAccess from 'src/helper/dom-access.helper'
import HttpClient from 'src/service/http-client.service'

export default class Rumble extends AddToCart {
	init() {
		//console.info(window.PluginManager.getPluginInstancesFromElement(this.el)) 
		//getPluginInstancesFromElement zeigt alle Plugins an, die hier aufgerufen werden (z.B. AddToCart, Rumble, FormScrollToInvalidField)

		this.PluginManager = window.PluginManager
		this._cartEl = DomAccess.querySelector(document, '.header-cart')
		this._client = new HttpClient(window.accessKey, window.contextToken)
		super.init()
		console.info("init rumble")
	}

	_openOffCanvasCart(instance, requestUrl, formData) {
		this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this))
		console.info('OffCanvasCart not opened')
	}

	_afterAddItemToCart() {
		this._refreshCartValue()
		this._rumbleButton()
	}

	_refreshCartValue(){
		const cartWidgetEL = DomAccess.querySelector(this._cartEl,'[data-cart-widget]')
		const cartWidgetInstance = this.PluginManager.getPluginInstanceFromElement(cartWidgetEL,'CartWidget')
		cartWidgetInstance.fetch()

	}

	_rumbleButton() {
		this._cartEl.classList.add('rumble')
		window.setTimeout(() => {
			this._cartEl.classList.remove('rumble')
		}, 3000)
	}
}