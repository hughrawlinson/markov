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
		var outstring = '';
		outstring = outstring + this.data[Math.floor(Math.random()*this.data.length)].key;
		while(outstring.length < length){
			outstring = outstring + this.data.filter(
					function(v) {
						return v.key === outstring[outstring.length-1];
					})[0]
				.values[
					Math.floor(
						Math.random()*this.data.filter(
							function(v) {
								return v.key === outstring[outstring.length-1];
							}
						)[0].values.length
					)];
		}
		return outstring;
	}
}
