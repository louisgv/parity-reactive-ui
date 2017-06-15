import React from 'react';
import {Api} from '@parity/parity.js';
import {bonds} from 'oo7-parity';
import {ReactiveComponent, Rimg} from 'oo7-react';
import {isNullData} from 'oo7-parity';
import {Label, Icon, Dropdown} from 'semantic-ui-react';
import {AccountIcon} from './AccountIcon';

export class AddressDropdown extends ReactiveComponent {
	constructor () {
		super(['value']);
	}
	render () {
		return (
			<Dropdown
				inline={this.props.inline}
				options={friendOptions}
				value={this.state.value}
				defaultValue={friendOptions[0].value}
				/>
		)
	}
}

const rootUrl = 'https://react.semantic-ui.com';

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/assets/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/assets/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/assets/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/assets/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/assets/images/avatar/small/justen.jpg' },
  },
].map((item) => {
	item.image.src = rootUrl + item.image.src;
	return item;
})
