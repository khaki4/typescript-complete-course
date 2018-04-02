// Abstract Classes
abstract class Project {
	projectName: string = "Default";
	budget: number = 1000;

	abstract chagneName(name: string): void;

	calcBuget() {
		return this.budget * 2;
	}
}

class ITProject extends Project{
	chagneName(name: string): void {
		this.projectName = name;
	}
}

const newProject = new ITProject();
console.log(newProject);
newProject.chagneName("Super IT Project");
console.log(newProject);
