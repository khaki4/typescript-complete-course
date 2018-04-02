// readonly properties with TypeScript 2.0
class OnlyOne {
	private static instance: OnlyOne;
	public readonly name: string;

	private constructor(name: string) {
		this.name = name;
	}

	static getInstance() {
		if (!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne('The Only One');
		}
		return OnlyOne.instance;
	}
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';
