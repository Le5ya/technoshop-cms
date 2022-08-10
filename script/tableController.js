import { tableRender } from './tableView.js';
import { getGoods } from './serviceAPI.js';

export const tableController = async () => {
	const goods = await getGoods();
	tableRender(goods);
};