Vue.component('mytable', {
	template: `<table border="1" width="300">
		<thead>
			<tr>
				<th v-for="(temp,index) in hdata">{{temp.title}}</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(temp,index) in bdata">
				<td v-for="(t,i) in hdata">{{temp[t.key]}}</td>
				<td><button @click="delRow(index,temp)">移除</button></td>
			</tr>
		</tbody>
	</table>`,
	props: ['hdata', 'bdata'],
	methods:{
		delRow(index,row){
			this.bdata.splice(index,1);
			//激活事件【儿子传递父亲】
			this.$emit('delete',row);
//			alert(JSON.stringify(this.$parent.h));
		}
	}
});