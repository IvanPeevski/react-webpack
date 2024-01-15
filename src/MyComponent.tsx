import React from 'react';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid, GridBehavior, GridAppearance, GridPaging, GridPager, GridSorting, GridEditing, GridColumn } from 'smart-webcomponents-react/grid';


class MyComponent extends React.Component {
	behavior: GridBehavior = {
		columnResizeMode: 'growAndShrink'
	}

	appearance: GridAppearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	paging: GridPaging = {
		enabled: true
	}

	pager: GridPager = {
		visible: true
	}

	sorting: GridSorting = {
		enabled: true
	}

	editing: GridEditing = {
		enabled: true
	}

	dataSource = [{ "firstName": "Beate", "lastName": "Wilson", "productName": "Caramel Latte"},   
	{ "firstName": "Ian", "lastName": "Nodier", "productName": "Caramel Latte"},   
	{ "firstName": "Petra", "lastName": "Vileid", "productName": "Green Tea"},   
	{ "firstName": "Mayumi", "lastName": "Ohno", "productName": "Caramel Latte"},   
	{ "firstName": "Mayumi", "lastName": "Saylor", "productName": "Espresso con Panna"},   
	{ "firstName": "Regina", "lastName": "Fuller", "productName": "Caffe Americano" },  
	{ "firstName": "Regina", "lastName": "Burke", "productName": "Caramel Latte"},   
	{ "firstName": "Andrew", "lastName": "Petersen", "productName": "Caffe Americano"},  
	{ "firstName": "Martin", "lastName": "Ohno", "productName": "Espresso con Panna"},   
	{ "firstName": "Beate", "lastName": "Devling", "productName": "Green Tea"},   
	{ "firstName": "Sven", "lastName": "Devling", "productName": "Espresso Truffle"},  
	{ "firstName": "Petra", "lastName": "Burke", "productName": "Peppermint Mocha Twist"},  
	{ "firstName": "Marco", "lastName": "Johnes", "productName": "Caffe Mocha"}]

	columns: GridColumn[] = [{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		dataField: 'productName'
	}
	]

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Grid
					dataSource={this.dataSource}
					columns={this.columns}
					appearance={this.appearance}
					behavior={this.behavior}
					paging={this.paging}
					pager={this.pager}
					sorting={this.sorting}
					editing={this.editing}
					>
				</Grid>
			</div>
		);
	}
}

export default MyComponent;