export const random = ({
	start = 0,
	end,
}: {
	start?: number;
	end: number;
}): number => {
	return Math.floor(Math.random() * (end - start) + start);
};

export const transformString = (str: string, maxLen = 200): string => {
	str = str ? str.trim() : '';

	if (str.length > maxLen) {
		str = str.slice(0, maxLen - 4) + ' ...';
	}

	return str;
};

export const getIdByUrl = (url: string): string => {
	const matches = url.match('[0-9]+$');
	if (matches) {
		return matches[0];
	}
	return '';
};

export const getArrWithIdByUrl = <T extends Record<string, string>>(
	objects: T[],
	fieldName: string
): T[] & { id: string }[] => {
	const res: T[] & { id: string }[] = [];
	objects.forEach(object => {
		if (fieldName in object) {
			const matches = object[fieldName].match('[0-9]+$');
			if (matches) {
				res.push({ ...object, id: matches[0] });
			}
		}
	});
	return res;
};
