function zeroesToEnd(a) {
	for(let i=a.length-1; i>=0; i--) {
	    const num = a[i];
		if(num === 0){
			a.splice(i, 1);
			a.push(0);
		}
	}
	return a;
}

a1 = [1, 2, 0, 0, 4, 0, 5]
r1 = zeroesToEnd(a1);

