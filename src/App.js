import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('b-button', Button)
Vue.component('b-icon', Icon)
Vue.component('b-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect;

{
    // icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'download'
        }
    })
    vm.$mount()

    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-download')

    vm.$el.remove()
    vm.$destroy()
}
{
    // loading
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'download',
            loading: true
        }
    })
    vm.$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')

    vm.$el.remove()
    vm.$destroy()
}
{
    // icon-position default
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'download',
        }
    })
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    let svgOrder = window.getComputedStyle(svgElement).order
    expect(svgOrder).to.eq('1')

    vm.$el.remove()
    vm.$destroy()
}
{
    // icon-position default
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'download',
            iconPosition: 'right'
        }
    })
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    let svgOrder = window.getComputedStyle(svgElement).order
    expect(svgOrder).to.eq('2')

    vm.$el.remove()
    vm.$destroy()
}

{
    // 监听 click
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'download',
            loading: true
        }
    })
    vm.$mount()

    const spy = chai.spy(function () {
    })
    vm.$on('click', spy)

    const button = vm.$el
    button.click()

    expect(spy).to.have.been.called()

    vm.$el.remove()
    vm.$destroy()
}
