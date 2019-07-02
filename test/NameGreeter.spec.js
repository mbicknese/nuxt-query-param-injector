import { mount } from '@vue/test-utils'
import NameGreeter from '@/components/NameGreeter.vue'

describe('NameGreeter', () => {
  test('renders your name', () => {
    const wrapper = mount(NameGreeter, { propsData: { name: 'Maarten' } })
    expect(wrapper.html()).toMatch(/Maarten/)
  })
  test('renders anon when no name is given', () => {
    const wrapper = mount(NameGreeter)
    expect(wrapper.html()).toMatch(/Anon/)
  })
})
