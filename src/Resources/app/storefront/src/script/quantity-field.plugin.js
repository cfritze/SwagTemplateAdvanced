import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper'

export default class QuantityFieldPlugin extends Plugin {

	
	init() {

		this.minus = DomAccess.querySelector(this.el, '.decrease')
		this.plus = DomAccess.querySelector(this.el, '.increase')
		this.field = DomAccess.querySelector(this.el, 'input[type="number"]')

		this.registerEvents()

		console.info("init QuantityFieldPlugin")

	

	}

	

	registerEvents() {
		this.minus.addEventListener('click', this.decreaseQuantity.bind(this))
		this.plus.addEventListener('click', this.increaseQuantity.bind(this))
	}

	decreaseQuantity() {
		
		const step = parseInt(this.options.purchaseSteps)
		const newQuant = parseInt(this.field.value) - step
		const minQuant = parseInt(this.options.minQuantity)
		
		
		if(newQuant <= minQuant) {
			this.field.value = minQuant
			return
		}
		
		
		this.field.value = newQuant
	}

	increaseQuantity() {

		const step = parseInt(this.options.purchaseSteps)
		const newQuant = parseInt(this.field.value) + step
		const maxQuant = parseInt(this.options.maxQuantity)

		if(newQuant >= maxQuant) {
			this.field.value = maxQuant
			return
		}

		this.field.value = newQuant
	}

}