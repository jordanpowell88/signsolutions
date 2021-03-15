import React from 'react';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

const Form = ({ formId }) => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '2218158',
        formId: formId,
        target: '#my-hubspot-form'
    });

    return (
        <div id="my-hubspot-form"></div>
    )
}
export default Form;