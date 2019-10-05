const strTableNames = "<tr><td>1</td><td>Alice</td><td>Miguel</td></tr><tr><td>2</td><td>Sophia</td><td>Arthur</td></tr><tr><td>3</td><td>Helena</td><td>Bernardo</td></tr><tr><td>4</td><td>Valentina</td><td>Heitor</td></tr><tr><td>5</td><td>Laura</td><td>Davi</td></tr><tr><td>6</td><td>Isabella</td><td>Lorenzo</td></tr><tr><td>7</td><td>Manuela</td><td>Théo</td></tr><tr><td>8</td><td>Júlia</td><td>Pedro</td></tr><tr><td>9</td><td>Heloísa</td><td>Gabriel</td></tr><tr><td>10</td><td>Luiza</td><td>Enzo</td></tr><tr><td>11</td><td>Maria Luiza</td><td>Matheus</td></tr><tr><td>12</td><td>Lorena</td><td>Lucas</td></tr><tr><td>13</td><td>Lívia</td><td>Benjamin</td></tr><tr><td>14</td><td>Giovanna</td><td>Nicolas</td></tr><tr><td>15</td><td>Maria Eduarda</td><td>Guilherme</td></tr><tr><td>16</td><td>Beatriz</td><td>Rafael</td></tr><tr><td>17</td><td>Maria Clara</td><td>Joaquim</td></tr><tr><td>18</td><td>Cecília</td><td>Samuel</td></tr><tr><td>19</td><td>Eloá</td><td>Enzo Gabriel</td></tr><tr><td>20</td><td>Lara</td><td>João Miguel</td></tr><tr><td>21</td><td>Maria Júlia</td><td>Henrique</td></tr><tr><td>22</td><td>Isadora</td><td>Gustavo</td></tr><tr><td>23</td><td>Mariana</td><td>Murilo</td></tr><tr><td>24</td><td>Emanuelly</td><td>Pedro Henrique</td></tr><tr><td>25</td><td>Ana Júlia</td><td>Pietro</td></tr><tr><td>26</td><td>Ana Luiza</td><td>Lucca</td></tr><tr><td>27</td><td>Ana Clara</td><td>Felipe</td></tr><tr><td>28</td><td>Melissa</td><td>João Pedro</td></tr><tr><td>29</td><td>Yasmin</td><td>Isaac</td></tr><tr><td>30</td><td>Maria Alice</td><td>Benício</td></tr><tr><td>31</td><td>Isabelly</td><td>Daniel</td></tr><tr><td>32</td><td>Lavínia</td><td>Anthony</td></tr><tr><td>33</td><td>Esther</td><td>Leonardo</td></tr><tr><td>34</td><td>Sarah</td><td>Davi Lucca</td></tr><tr><td>35</td><td>Elisa</td><td>Bryan</td></tr><tr><td>36</td><td>Antonella</td><td>Eduardo</td></tr><tr><td>37</td><td>Rafaela</td><td>João Lucas</td></tr><tr><td>38</td><td>Maria Cecília</td><td>Victor</td></tr><tr><td>39</td><td>Liz</td><td>João</td></tr><tr><td>40</td><td>Marina</td><td>Cauã</td></tr><tr><td>41</td><td>Nicole</td><td>Antônio</td></tr><tr><td>42</td><td>Maitê</td><td>Vicente</td></tr><tr><td>43</td><td>Isis</td><td>Caleb</td></tr><tr><td>44</td><td>Alícia</td><td>Gael</td></tr><tr><td>45</td><td>Luna</td><td>Bento</td></tr><tr><td>46</td><td>Rebeca</td><td>Caio</td></tr><tr><td>47</td><td>Agatha</td><td>Emanuel</td></tr><tr><td>48</td><td>Letícia</td><td>Vinícius</td></tr><tr><td>49</td><td>Maria-</td><td>João Guilherme</td></tr><tr><td>50</td><td>Gabriela</td><td>Davi Lucas</td></tr><tr><td>51</td><td>Ana Laura</td><td>Noah</td></tr><tr><td>52</td><td>Catarina</td><td>João Gabriel</td></tr><tr><td>53</td><td>Clara</td><td>João Victor</td></tr><tr><td>54</td><td>Ana Beatriz</td><td>Luiz Miguel</td></tr><tr><td>55</td><td>Vitória</td><td>Francisco</td></tr><tr><td>56</td><td>Olívia</td><td>Kaique</td></tr><tr><td>57</td><td>Maria Fernanda</td><td>Otávio</td></tr><tr><td>58</td><td>Emilly</td><td>Augusto</td></tr><tr><td>59</td><td>Maria Valentina</td><td>Levi</td></tr><tr><td>60</td><td>Milena</td><td>Yuri</td></tr><tr><td>61</td><td>Maria Helena</td><td>Enrico</td></tr><tr><td>62</td><td>Bianca</td><td>Thiago</td></tr><tr><td>63</td><td>Larissa</td><td>Ian</td></tr><tr><td>64</td><td>Mirella</td><td>Victor Hugo</td></tr><tr><td>65</td><td>Maria Flor</td><td>Thomas</td></tr><tr><td>66</td><td>Allana</td><td>Henry</td></tr><tr><td>67</td><td>Ana Sophia</td><td>Luiz Felipe</td></tr><tr><td>68</td><td>Clarice</td><td>Ryan</td></tr><tr><td>69</td><td>Pietra</td><td>Arthur Miguel</td></tr><tr><td>70</td><td>Maria Vitória</td><td>Davi Luiz</td></tr><tr><td>71</td><td>Maya</td><td>Nathan</td></tr><tr><td>72</td><td>Laís</td><td>Pedro Lucas</td></tr><tr><td>73</td><td>Ayla</td><td>Davi Miguel</td></tr><tr><td>74</td><td>Ana Lívia</td><td>Raul</td></tr><tr><td>75</td><td>Eduarda</td><td>Pedro Miguel</td></tr><tr><td>76</td><td>Mariah</td><td>Luiz Henrique</td></tr><tr><td>77</td><td>Stella</td><td>Luan</td></tr><tr><td>78</td><td>Ana</td><td>Erick</td></tr><tr><td>79</td><td>Gabrielly</td><td>Martin</td></tr><tr><td>80</td><td>Sophie</td><td>Bruno</td></tr><tr><td>81</td><td>Carolina</td><td>Rodrigo</td></tr><tr><td>82</td><td>Maria Laura</td><td>Luiz Gustavo</td></tr><tr><td>83</td><td>Maria Heloísa</td><td>Arthur Gabriel</td></tr><tr><td>84</td><td>Maria Sophia</td><td>Breno</td></tr><tr><td>85</td><td>Fernanda</td><td>Kauê</td></tr><tr><td>86</td><td>Malu</td><td>Enzo Miguel</td></tr><tr><td>87</td><td>Analu</td><td>Fernando</td></tr><tr><td>88</td><td>Amanda</td><td>Arthur Henrique</td></tr><tr><td>89</td><td>Aurora</td><td>Luiz Otávio</td></tr><tr><td>90</td><td>Maria Isis</td><td>Carlos Eduardo</td></tr><tr><td>91</td><td>Louise</td><td>Tomás</td></tr><tr><td>92</td><td>Heloise</td><td>Lucas Gabriel</td></tr><tr><td>93</td><td>Ana Vitória</td><td>André</td></tr><tr><td>94</td><td>Ana Cecília</td><td>José</td></tr><tr><td>95</td><td>Ana Liz</td><td>Yago</td></tr><tr><td>96</td><td>Joana</td><td>Danilo</td></tr><tr><td>97</td><td>Luana</td><td>Anthony Gabriel</td></tr><tr><td>98</td><td>Antônia</td><td>Ruan</td></tr><tr><td>99</td><td>Isabel</td><td>Miguel Henrique</td></tr><tr><td>100</td><td>Bruna</td><td>Oliver</td></tr>"

const strTableNames_L = strTableNames.replace("</tr>", "").split("<tr>");

let listNames = [];


const axios = require('axios');

const listSurname = [
    "Nazareth",
    "Goncalves",
    "da Silva",
    "Naragotti",
    "Shubilanga",
    "Juizssa",
    "Amaziato",
    "Jorobaba",
    "Cambaiaco",
    "Zurubaba",
    "Xibirugs",
    "Zaab",
    "Supingo",
    "Xobilango",
    "Jabiroga",
    "Xanxagado",
    "Amazonca",
    "Goretti",
    "Zombaolongo",
    "Rabin",
    "Melo",
    "Zurita",
    "Amazongo",
    "Silva",
    "Ferreira",
    "Zamparonni",
    "Saad",
    "Zombone",
    "Falagore",
    "DingDong",
    "Foregonzo",
    "Zuribango",
    "Hous",
    "Haare"
];
let listFullNames = [];


async function populateNames() {
    await strTableNames_L.forEach((line, n) => {
        if (line.length > 0) {
            let listAtt = line.replace("</tr>", "").split("<td>");
            let name = listAtt[2].replace("</td>", "");
            listNames.push(name);
            name = listAtt[3].replace("</td>", "");
            listNames.push(name);
        }
    });
}



async function mixNames() {
    listNames.forEach((name, n) => {
        listSurname.forEach((surname, n1) => {
            listSurname.forEach((surname2, n2) => {

                let username = name + "." + surname + "." + surname2;
                let firstname = name;
                let lastname = surname + " " + surname2;
                let email = (name + "." + surname + "." + surname2).toLowerCase() + "@gmail.com";
                let password = "1234";

                listFullNames.push(
                    {
                        username,
                        firstname,
                        lastname,
                        email,
                        password
                    }
                );
            })
        })
    });
}


function showNames() {
    console.log(listFullNames);
    console.log(listFullNames[1000]);
}


const mainUrl = "http://api.evaluatz.com/signup/classic?";
async function sendRequests(n) {
    console.log(listFullNames.length);
    for (let i = 0; i <= n; i++) {
        sendReq(n, i);
    }
}


function sendReq(n, pos) {
    if (listFullNames.length - 1 == pos) {
        return;
    }
    console.log("Send request: " + pos);
    let user = listFullNames[pos];
    let { username,
        firstname,
        lastname,
        email,
        password } = user;

    let url = mainUrl +
        "username=" + username + "&" +
        "firstname=" + firstname + "&" +
        "lastname=" + lastname + "&" +
        "email=" + email + "&" +
        "password=" + password;

    axios.get(url)
        .then(response => {
            console.log(pos + " - Inserted: " + firstname + " " + lastname);
            sendReq(n, pos + n);
        })
        .catch(error => {
            console.log(pos + " - Error while inserting: " + firstname + " " + lastname);
            sendReq(n, pos + n);
        });
}





const mainUrlAuth = "http://api.evaluatz.com/auth/classic?";
async function checkLogins(n) {
    console.log(listFullNames.length);

    for (let i = 0; i <= n; i++) {
        sendReqLogin(n, i);
    }
}

function sendReqLogin(n, pos) {
    if (listFullNames.length - 1 == pos) {
        return;
    }
    console.log("Send request Login: " + pos);
    let user = listFullNames[pos];
    let { username,
        firstname,
        lastname,
        password } = user;

    let url = mainUrlAuth +
        "username=" + username + "&" +
        "password=" + password;

    axios.get(url)
        .then(response => {
            console.log(pos + " - Login OK: " + firstname + " " + lastname);
            sendReqLogin(n, pos + n);
        })
        .catch(error => {
            console.log(pos + " - Error while login: " + firstname + " " + lastname);
            sendReqLogin(n, pos + n);
        });
}

async function run() {
    await populateNames();
    await mixNames();
    sendRequests(100);
    await checkLogins(100);
}

run();








