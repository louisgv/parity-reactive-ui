import React from 'react';

import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import { AddressDropdown, AddressBond, AccountLabel} from '../../src';

export class App extends React.Component {
	constructor() {
		super();
		this.bond = new Bond
	}

	render() {
		return (
			<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '90vh'
				}}>
				<AddressDropdown />
				<br />
				<AddressBond bond={this.bond} defaultValue='0x00D4cD27DC890b058c49Ca8D29D6678014214B48'/>
				<br />
				<AccountLabel address={this.bond}/>
			</div>
		);
	}
}
