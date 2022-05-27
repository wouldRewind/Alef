export default function rightAgeEnd(age) {
	let end;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		end = 'лет';
	}
	else {
		count = count % 10;
		if (count == 1) {
			end = 'год';
		}
		else if (count >= 2 && count <=4) {
			end = 'года';
		}
		else {
			end = 'лет'
		}
	}
	return end;
}