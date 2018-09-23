import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x0cB591c7A34292Ea20A469D63329142E6E99ac3F'
);

export default instance;


