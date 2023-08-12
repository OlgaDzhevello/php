var isMale = true;       // Мужчина - true, Женщина - false

const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Вера",
            "id_3": "Татьяна",
            "id_4": "Ольга",
            "id_5": "Мария",
            "id_6": "Галина",
            "id_7": "Евгения",
            "id_8": "Диана",
            "id_9": "Екатерина",
            "id_10": "Алина"
        }
    }`,

   patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    professionJson: `{
        "count": 10,
        "list": {     
            "id_1": ["Портной","Швея"],
            "id_2": ["Медбрат","Медицинская сестра"],
            "id_3": ["Гувернер","Няня"],
            "id_4": ["Санитар","Санитарка"],
            "id_5": ["Программист","Программист"],
            "id_6": ["Продавец","Продавщица"],
            "id_7": ["Домработник","Горничная"],
            "id_8": ["Фасовщик","Фасовщица"],
            "id_9": ["Разнорабочий","Разнорабочая"],
            "id_10":["Дояр","Доярка"]
        }
    }`,

    months: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября"," ноября","декабря"],
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        return isMale ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);            
    },

    randomSurname: function() {
        let maleSurname = this.randomValue(this.surnameJson);
        return isMale ? maleSurname : maleSurname + 'а';
    },

    randomPatronymic: function() {
        let curPatr = this.randomValue(this.patronymicMaleJson);
        if ( !isMale ) {
            switch (curPatr) {
                case "Никитович":
                    curPatr = "Никитишна"
                    break;
                default:
                    curPatr = curPatr.substring(0, curPatr.length - 2) + 'на'
                    break;
            }; 
        };
        return curPatr;
    },

    randomDate: function() {

        let year = this.randomIntNumber(2009, 1923);
        let monthNum = this.randomIntNumber(12, 1);
        let maxDay = 31;

        if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
            maxDay = 30;
        } else if (monthNum = 2) {
            maxDay = 28;
        };
        let day = this.randomIntNumber(maxDay, 1);

        return (day + ' ' + this.months[monthNum - 1] + ' ' + year);
    },

    randomProfession: function() {
        let prof = this.randomValue(this.professionJson);
        return isMale ? prof[0] : prof[1];
    },
 
    getPerson: function () {

        this.person = {};

        isMale = this.randomIntNumber();
        this.person.gender = isMale ? this.GENDER_MALE : this.GENDER_FEMALE;
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.dateOfBirth = this.randomDate();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();

        return this.person;
    }
};
