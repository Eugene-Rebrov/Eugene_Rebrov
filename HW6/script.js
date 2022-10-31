class Human {
    constructor(growth, weight, name, date, gender, disability) {
        this.growth = growth;
        this.weight = weight;
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.disability = disability ;
    }
    get getInfo() {
        const information = {
            name: this.name,
            weight: this.weight,
            growth: this.growth,
            gender: this.gender,
            date: this.date,
            disability: this.disability
        };
        // console.log(information);
    }
    get sayHi(){
        console.log(`Привет меня зовут ${this.name}` )
    }
    set setName(name){
        this.name = name;

    }
    set setDisability(disability){
        this.disability = disability;

    }
}
const newHumanClass = new Human(180, 90, 'Oleh', new Date('20.01.2001'), 'male', false);
// newHumanClass.getInfo;
// newHumanClass.sayHi;
// newHumanClass.setName = 'Oleh ne Oleh';
// newHumanClass.setDisability = true;




//1.2-1.3
class FrontEndDeveloper extends Human {
    constructor(growth, weight, name, date, gender, disability, carStart, company) {
        super(growth, weight, name, date, gender, disability);
        this.carStart = carStart;
        this.company = company;
    }

    get sayHello() {
        console.log(`Привет меня зовут ${this.name},я фронтенд разработчик. Работаю с ${this.carStart} `);
    }

    get allCash() {
        let firstObject = Object.values(this.company[0]);
        let date1 = (firstObject[1].getDate() - firstObject[0].getDate()) / 30 +
            firstObject[1].getMonth() - firstObject[0].getMonth() +
            (12 * (firstObject[1].getFullYear() - firstObject[0].getFullYear()));
        let firstMoney = firstObject[2] * date1;

        let secondObject = Object.values(this.company[1]);
        let date2 = (secondObject[1].getDate() - secondObject[0].getDate()) / 30 +
            secondObject[1].getMonth() - secondObject[0].getMonth() +
            (12 * (secondObject[1].getFullYear() - secondObject[0].getFullYear()));
        let secondMoney = secondObject[2] * date2;

        let allMoney = firstMoney + secondMoney;
        console.log(allMoney);
    };

    companyNameSearch(company) {
        let companyId;
        for (let i = 0; i < this.company.length; i++) {
            if (this.company[i].companyName === company) {
                companyId = this.company[i];
            }
        }
        console.log(companyId);
    }
    addOtherCompany(newComp) {
        this.company.push(newComp);
        console.log(this.company);
}
}
const frontDev = new FrontEndDeveloper(180, 90, 'Oleh', new Date('20.01.2001'),
    'male', false, new Date ('2020-08-03'),
    [
        {
            start: new Date('2020-08-03'),
            end: new Date('2021-08-03'),
            salaryPerMonth: 500,
            position: 'Junior',
            companyName: 'Oracle'
        },
            {
                start: new Date('2021-08-03'),
                end: new Date('2022-08-03'),
                salaryPerMonth: 2500,
                position: 'Middle',
                companyName: 'Google'
            }
            ],);
frontDev.sayHello;
frontDev.allCash;
frontDev.companyNameSearch('Oracle');
frontDev.addOtherCompany({
    start: new Date('2021-08-03'),
    end: new Date('2022-10-03'),
    salaryPerMonth: 9000,
    position: 'Senior',
    companyName: 'ATB'
});
console.log(frontDev.getInfo);
console.log(frontDev);


//1.4


class Builder extends Human {
    constructor(growth, weight, name, date, gender, disability, buildLocation, instruments, workSpeed) {
        super(growth, weight, name, date, gender, disability);
        this.buildLocation = buildLocation;
        this.instruments = instruments;
        this.workSpeed = workSpeed;
    };
    houseBuild(houseArea) {
        let amountWork = houseArea * this.workSpeed;
        let d = Math.floor(amountWork) ;
        let r = {};
        let s = {
            year: 525600,
            month: 44640,
            week: 10080,
            day: 1440,
            hour: 60,
            minute: 1,
        };
        Object.keys(s).forEach(function(key){
            r[key] = Math.floor(d / s[key]);
            d -= r[key] * s[key];

        });
        console.log(r);

    }

}

const newBuilder = new Builder(140,120,'Minion','20.01.2001','male',
    false, 'Sarai',['кирка', 'топор'],20);
newBuilder.houseBuild(1200);