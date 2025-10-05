export class db {
    usersList = [
        {
            id : 1,
            name : "Nestor Moises Castillo Bautista",
            age : 21,
            email : "22690495@tecvalles.mx"
        },
        {
            id : 2,
            name : "Erick Ivan Garcia Ortega",
            age : 21,
            email : "22690195@tecvalles.mx"
        },
        {
            id : 3,
            name : "Gretel Anel Martinez Martinez",
            age : 20,
            email : "22690401@tecvalles.mx"
        }
    ];


    getAll(){
        return this.usersList;
    }


    count(){
        return this.usersList.length;
    }


    getUserById(id: number){
        return this.usersList.find(user => user.id === id);
    }


    addUser(name: string, age: number, email: string){
        const newId = this.usersList.length > 0 ? Math.max(...this.usersList.map(u => u.id)) + 1 : 1;
        const newUser = {
            id: newId,
            name: name,
            age: age,
            email: email
        };
        this.usersList.push(newUser);
        return newUser;
    }


    updateUser(id: number, name: string, age: number, email: string){
        const userIndex = this.usersList.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.usersList[userIndex] = {
                id: id,
                name: name,
                age: age,
                email: email
            };
            return this.usersList[userIndex];
        }
        return null;
    }

    deleteUser(id: number){
        const userIndex = this.usersList.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = this.usersList[userIndex];
            this.usersList.splice(userIndex, 1);
            return deletedUser;
        }
        return null;
    }
}
