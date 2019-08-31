const az = {
    value: 'AZ',
    label: 'Arizona'
};

const ca = {
   value: 'CA',
   label: 'California'
};

const stateOptions = [
    {value: 'AZ', lblOption: 'Arizona'},
    {value: 'CA', lblOption: 'California'}
];

export default [
	{ label: 'First Name', fieldType:'text', name: 'firstName' },
	{ label: 'Last Name', fieldType:'text', name: 'lastName' },
    { label: 'Street', fieldType:'text', name: 'street' },
    { label: 'City',  fieldType:'text', name: 'city' },
    { label: 'State', fieldType:'select', options: stateOptions, name: 'state' },
	{ label: 'Email', fieldType:'text', name: 'recipients' }
];