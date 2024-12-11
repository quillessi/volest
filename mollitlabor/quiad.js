class Task {
    constructor(name) {
        this.name = name;
        this.isCompleted = false;
    }

    start() {
        console.log(`Starting task: ${this.name}`);
        // Some logic to start the task
    }

    finish() {
        this.isCompleted = true;
        console.log(`Task "${this.name}" is finished.`);
    }
}

// Usage
let myTask = new Task('Write report');
myTask.start();
myTask.finish();  // Calls the finish method on the instance myTask
