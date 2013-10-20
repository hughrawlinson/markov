var markov = {
	data: [],
	read:function(string){
		for(var i = 0; i < string.length - 1; i++){
			if(this.data.filter(function(v) {return v.key === string[i];})[0] === undefined){
				this.data.push({key:string[i],values:[]});
			}
			this.data.filter(function(v) {return v.key === string[i];})[0].values.push(string[i+1]);
		}
	},
	write: function(length){
		var output = [];
		output.push( this.data[Math.floor(Math.random()*this.data.length)].key );
		while(output.length < length){
			output.push(this.data.filter(
					function(v) {
						return v.key === output[output.length-1];
					})[0]
				.values[
					Math.floor(
						Math.random()*this.data.filter(
							function(v) {
								return v.key === output[output.length-1];
							}
						)[0].values.length
					)]);
		}
		return output;
	}
}
