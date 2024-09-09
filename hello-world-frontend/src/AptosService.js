import { AptosClient } from 'aptos';

const client = new AptosClient('http://localhost:8080/v1');

export async function getHelloWorld() {
    try {
        const response = await client.getAccount('0x5617744bdd2c7791bdcfe0882044f644bc720abbdb04052ba6ee807b49d32fe2');
        console.log(response);
    } catch (error) {
        console.error('Error fetching data from Aptos:', error);
    }
}
