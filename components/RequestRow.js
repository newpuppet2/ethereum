import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {

onApprove = async() => {
const campaign = Campaign(this.props.address);
const accounts = await web3.eth.getAccounts();

await campaign.methods.approveRequest(this.props.id).send({
from: accounts[0]
});
};

onFinalize = async() => {
const campaign = Campaign(this.props.address);
const accounts = await web3.eth.getAccounts();
await campaign.methods.finalizeRequest(this.props.id).send({
from: accounts[0]
});


};


render() {
const { Row, cell } = Table;
const { id, request, approversCount } = this.props;
const readyToFinalize = request.approvalCount > approversCount / 2;


return(
<Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
<cell>{id}</cell>
<cell>{request.description}</cell>
<cell>{web3.utils.fromWei(request.value, 'ether')}</cell>
<cell>{request.receipient}</cell>
<cell>{request.approvalCount}/{approvers.count}</cell>
<cell>
{ request.complete ? null : (
<Button color="green" basic onClick={this.onApprove}>Approve</Button>
)}
</cell>
<cell>
{ request.complete ? null : (
<Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
)}
</cell>
</Row>

);
}
}

export default RequestRow;
