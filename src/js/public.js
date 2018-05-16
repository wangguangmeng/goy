//计算兄弟元素
export function siblings(elem) { //参数elem就是想取谁的兄弟节点，就把那个元素传进去
	var nodes = []; //定义一个数组，用来存elem的兄弟元素
	var previ = elem.previousSibling;
	while(previ) { //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 previ表示previousSibling
		if(previ.nodeType === 1) {
			nodes.push(previ);
		}
		previ = previ.previousSibling; //最后把上一个节点赋给previ
	}
	nodes.reverse(); //把顺序反转一下 这样元素的顺序就是按先后的了
	var nexts = elem.nextSibling; //再取elem的弟弟
	while(nexts) { //判断有没有下一个弟弟结点 nexts是nextSibling的意思
		if(nexts.nodeType === 1) {
			nodes.push(nexts);
		}
		nexts = nexts.nextSibling;
	}
	return nodes; //最后按从老大到老小的顺序，把这一组元素返回
}

export default {
	siblings
}