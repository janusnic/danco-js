# danco-js UNIT 02

# функции

- Определение функции – обычное определение переменной, где значение, которое получает переменная, является функцией.

```
var square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144

```

Функция создаётся выражением, начинающимся с ключевого слова function. У функций есть набор параметров, и тело, содержащее инструкции, которые необходимо выполнить при вызове функции. Тело функции всегда заключают в фигурные скобки. У функции может быть несколько параметров, или вообще их не быть. 

```
var makeNoise = function() {
  console.log("Oops!");
};

makeNoise();

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));

```

# Для возврата значения используется директива return.

Инструкция return определяет значение, возвращаемое функцией. Она может находиться в любом месте функции. Как только до нее доходит управление — функция завершается и значение передается обратно.

# Вызовов return может быть несколько:

```
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Ok?');
  }
}

var age = prompt('Age?');

if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}
```
# Директива return может также использоваться без значения, чтобы прекратить выполнение и выйти из функции.

```

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert( "Little much too late" ); // (*)
  // ...
}
```

# Значение функции без return и с пустым return

В случае, когда функция не вернула значение или return был без аргументов, считается что она вернула undefined:
```
function doNothing() { /* пусто */ }

alert( doNothing() ); // undefined
```

# return без аргумента:
```
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

```
Function Declaration
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
var sum = function(a, b) {
  return a + b;
}

Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

# Функциональные выражения
В JavaScript функция является значением, таким же как строка или число.

Как и любое значение, объявленную функцию можно вывести:
```
function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // выведет код функции
```
Функцию можно скопировать в другую переменную:
```
function sayHi() {   
  alert( "Привет" );
}

var func = sayHi;    
func(); // Привет    

sayHi = null;
sayHi();             // ошибка (4)

```

# Объявление Function Expression
«Function Expression» (функциональное выражение):
```
var f = function(параметры) {
  // тело функции
};
var sayHi = function(person) {
  alert( "Привет, " + person );
};

sayHi('Tom');
```
# Условное объявление функции

для условного объявления функций Function Declaration не годится.

```
var age = prompt('Сколько вам лет?');

var sayHi;

if (age >= 18) {
  sayHi = function() {
    alert( 'Прошу Вас!' );
  }
} else {
  sayHi = function() {
    alert( 'До 18 нельзя' );
  }
}

sayHi();
var age = prompt('Сколько вам лет?');

var sayHi = (age >= 18) ?
  function() { alert('Прошу Вас!');  } :
  function() { alert('До 18 нельзя'); };

sayHi();
```
# Анонимные функции

Функция ask(question, yes, no) предназначена для выбора действия в зависимости от результата f.

Она выводит вопрос на подтверждение question и, в зависимости от согласия пользователя, вызывает yes или no:
```
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);
```

то же самое можно написать более коротко:
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
```
Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.

# new Function

Он позволяет создавать функцию полностью «на лету» из строки:
```
var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3
```
функция создаётся вызовом new Function(params, code):

# Параметры и область видимости

Параметры функции – такие же переменные, но их начальные значения задаются при вызове функции, а не в её коде. 
Важное свойство функций в том, что переменные, созданные внутри функции (включая параметры), локальны внутри этой функции. 
```
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
// → outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
// → inside f2
```
# Вложенные области видимости

Функции можно задавать внутри функций, что приводит к нескольким уровням локальности.
```
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
```

в JavaScript область видимости создают только функции. 
```
var something = 1;
{
  var something = 2;
  // Делаем что-либо с переменной something...
}
// Вышли из блока...
```

# Замыкания
```
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

```

# Рекурсия

Функция может вызывать сама себя, если она заботится о том, чтобы не переполнить стек. Такая функция называется рекурсивной. 
```
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
```

## Функции высшего порядка

Функции, оперирующие другими функциями — либо принимая их в качестве аргументов, либо возвращая их, называются функциями высшего порядка. 

```
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Можно сделать функцию, меняющую другие функции.
```
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false

```

Можно делать функции, создающие новые типы управления потоком выполнения программы.
```
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
```

переменная n – это аргумент внешней функции. Поскольку внутренняя функция живёт в окружении внешней, она может использовать n. Тела таких внутренних функций имеют доступ к переменным, окружающим их. Они могут играть роль блоков {}, используемых в обычных циклах и условных выражениях. Важное отличие в том, что переменные, объявленные внутри внутренних функций, не попадают в окружение внешней.

## Передача аргументов

Функция noisy - передаёт свой аргумент в другую функцию, не совсем удобна.
```
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
```

Если f принимает больше одного параметра, она получит только первый. 

## метод apply
Ему передают массив (или объект в виде массива) из аргументов, а он вызывает функцию с этими аргументами.
```
function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

```
Данная функция демонстрирует шаблон – возвращаемая ею функция передаёт в f все полученные ею аргументы. Происходит это при помощи передачи её собственных аргументов, хранящихся в объекте arguments, в метод apply. Первый аргумент метода apply, которому мы присваиваем null, можно использовать для эмуляции вызова метода. 

# JSON

Функции высшего порядка, которые каким-то образом применяют функцию к элементам массива, широко распространены в JavaScript. Метод forEach – одна из самых примитивных подобных функций.  

JSON Файл выглядит примерно так:
```
[
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1980, "fee": 1905, "dep": "C1", "position": "dev"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1980, "fee": 1956, "dep": "P1", "position": "seo"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1983, "fee": 1924, "dep": "F1", "position": "seo"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1964, "fee": 1948, "dep": "J1", "position": "boss"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1977, "fee": 1997, "dep": "E1", "position": "dev"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1961, "fee": 1980, "dep": "J1", "position":null}',
  … и так далее
]

```

Этот формат называется JSON, что означает JavaScript Object Notation (разметка объектов JavaScript). Он широко используется в хранении данных и сетевых коммуникациях.

JSON похож на JavaScript по способу записи массивов и объектов – с некоторыми ограничениями. Все имена свойств должны быть заключены в двойные кавычки, а также допускаются только простые величины – никаких вызовов функций, переменных, ничего что включало бы вычисления. Также не допускаются комментарии.

JavaScript предоставляет функции JSON.stringify и JSON.parse, которые преобразовывают данные из этого формата и в этот формат. Первая принимает значение и возвращает строчку с JSON. Вторая принимает такую строчку и возвращает значение.
1.html
```
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980
```

# 2.html
Переменная USER_FILE содержит JSON файл в виде строки. 

```
var persone = JSON.parse(USER_FILE);
console.log(persone.length);
// → 39

```
## Фильтруем массив 3.html

Чтобы найти людей, родившихся в период 1970 - 1995 годов, может пригодиться следующая функция. Она отфильтровывает элементы массива, которые не проходят проверку.

```
var persone  =  JSON.parse(USER_FILE);
console.log(persone.length);

function  filter(array,   test)   {
        var passed  =   [];
        for (var    i   =   0;  i   <   array.length;   i++)    {
                if  (test(array[i]))
                        passed.push(array[i]);
        }
        return  passed;
}
console.log(filter(persone,  function(person)    {
        return  person.born > 1970 && person.born < 1995;
        }));

```
Используется аргумент с именем test – это функция, которая производит вычисления проверки. Она вызывается для каждого элемента, а возвращаемое ею значение определяет, попадает ли этот элемент в возвращаемый массив.

функция filter не удаляет элементы из существующего массива, а строит новый, содержащий только прошедшие проверку элементы. 

Как и forEach, filter – это один из стандартных методов массива. 
```
console.log(persone.filter(function(person)  {   
    return  person.dep == "C1"; }));

```

## Преобразования при помощи map 4.html

Метод map преобразовывает массив, применяя функцию ко всем его элементам и строя новый массив из возвращаемых значений. У нового массива будет та же длина, что у входного, но его содержимое будет преобразовано в новый формат.
```
var persone  =  JSON.parse(USER_FILE);
console.log(persone.length);

function  filter(array,   test)   {
        var passed  =   [];
        for (var    i   =   0;  i   <   array.length;   i++)    {
                if  (test(array[i]))
                        passed.push(array[i]);
        }
        return  passed;
}
console.log(filter(persone,  function(person)    {
        return  person.born > 1970 && person.born < 1995;
        }));

console.log(persone.filter(function(person)  {   
    return  person.dep == "J1"; }));


function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overFee = persone.filter(function(person) {
  return person.fee >1990 && person.dep == 'J1';
});
console.log(map(overFee, function(person) {
  return person.name;
}));
```

Как и forEach и filter, map также является стандартным методом у массивов.

## Суммирование с reduce

Другой популярный пример работы с массивами – получение одиночного значения на основе данных в массиве. 

Операция высшего порядка такого типа называется reduce (уменьшение; или иногда fold, свёртывание). Можно представить её в виде складывания массива, по одному элементу за раз. 

Параметры функции reduce, кроме массива – комбинирующая функция и начальное значение. 
5.html

```
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));
// → 10

```
Если массив содержит хотя бы один элемент, вы можете не указывать аргумент start. Метод возьмёт в качестве стартового значения первый элемент массива и начнёт работу со второго.

Чтобы при помощи reduce найти самого старшего сотрудниеп:
```
console.log(persone.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));
```

## Компонуемость

поиск человека с самой ранней датой рождения:
```
var min = persone[0];
for (var i = 1; i < persone.length; i++) {
  var cur = persone[i];
  if (cur.born < min.born)
    min = cur;
}
console.log(min);
```

Функции высшего порядка раскрывают свои возможности по-настоящему, когда вам приходится комбинировать функции. К примеру, напишем код, находящий средний возраст мужчин и женщин в наборе. 7.html

```
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return 2015 - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(persone.filter(male).map(age)));

console.log(average(persone.filter(female).map(age)));
```

вызов функций в JavaScript обходится дороже по сравнению с циклами.

## Связывание

Метод bind, который есть у всех функций, создаёт новую функцию, которая вызовет оригинальную, но с некоторыми фиксированными аргументами.

мы определяем функцию isInSet, которая говорит, есть ли имя человека в заданном наборе. Для вызова filter мы можем либо написать выражение с функцией, которое вызывает isInSet, передавая ей набор строк в качестве первого аргумента, или применить функцию isInSet частично.

8.html
```
var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(persone.filter(function(person) {
  return isInSet(theSet, person);
}));

console.log(persone.filter(isInSet.bind(null, theSet)));

```

Вызов bind возвращает функцию, которая вызовет isInSet с первым аргументом theSet, и последующими аргументами такими же, какие были переданы в bind.

Первый аргумент, который сейчас установлен в null, используется для вызовов методов – так же, как было в apply.


# Загрузка документа: 

Процесс загрузки HTML-документа, условно, состоит из трёх стадий:

- DOMContentLoaded — браузер полностью загрузил HTML, и построил DOM-дерево.
- load — браузер загрузил все ресурсы.
- beforeunload/unload — уход со страницы.

На каждую можно повесить обработчик, чтобы совершить полезные действия:

- DOMContentLoaded — означает, что все DOM-элементы разметки уже созданы, можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно, ещё не догрузились какие-то картинки или стили.

- load — страница и все ресурсы загружены, используется редко, обычно нет нужды ждать этого момента.

- beforeunload/unload — можно проверить, сохранил ли посетитель изменения, уточнить, действительно ли он хочет покинуть страницу.

# HTML DOM Script Object 

load/

## DOMContentLoaded

Событие DOMContentLoaded поддерживается во всех браузерах, кроме IE8-. 

Обработчик на него вешается только через addEventListener:

document.addEventListener("DOMContentLoaded", ready);

1.html
```
<script>
  function ready() {
    alert( 'DOM готов' );
    alert( "Размеры картинки: " + img.offsetWidth + "x" + img.offsetHeight );
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://js.cx/clipart/yozhik.jpg?speed=1">
```
обработчик DOMContentLoaded сработает сразу после загрузки документа, не дожидаясь получения картинки.

Поэтому на момент вывода alert и сама картинка будет невидна и её размеры — неизвестны (кроме случая, когда картинка взята из кеша браузера).

## DOMContentLoaded и скрипты

Если в документе есть теги script, то браузер обязан их выполнить до того, как построит DOM. Поэтому событие DOMContentLoaded ждёт загрузки и выполнения таких скриптов.

Исключением являются скрипты с атрибутами async и defer, которые подгружаются асинхронно.

если на странице подключается скрипт с внешнего ресурса (к примеру, реклама), и он тормозит, то событие DOMContentLoaded и связанные с ним действия могут сильно задержаться.

### document.createElement('script')

Современные системы рекламы используют атрибут async, либо вставляют скрипты через DOM: document.createElement('script')..., что работает так же как async: такой скрипт выполняется полностью независимо от страницы и от других скриптов — сам ничего не ждёт и ничего не блокирует.

2.html
```
<!DOCTYPE html>
<html>
<body>

<h3>A demonstration of how to access a SCRIPT element</h3>

<script id="myScript" src="demo_script_src.js"></script>

<p>Click the button to get the URL of the external script file.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("myScript").src;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>

document.write("This text comes from an external script.");

```
### createElement
3.html
```
<!DOCTYPE html>
<html>
<body>

<p>Click the button to create a SCRIPT element that alerts "Hello World!".</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var x = document.createElement("SCRIPT");
    var t = document.createTextNode("alert('Hello World!')");
    x.appendChild(t);
    document.body.appendChild(x);
}
</script>

</body>
</html>
```
## DOMContentLoaded и стили

Внешние стили никак не влияют на событие DOMContentLoaded.

Если после стиля идёт скрипт, то этот скрипт обязан дождаться, пока стиль загрузится:
```
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // сработает после загрузки style.css
</script>
```
Такое поведение прописано в стандарте. Его причина — скрипт может захотеть получить информацию со страницы, зависящую от стилей, например, ширину элемента, и поэтому обязан дождаться загрузки style.css.

так как событие DOMContentLoaded будет ждать выполнения скрипта, то оно подождёт и загрузки стилей, которые идут перед script.

### defer
4.html
```
<!DOCTYPE html>
<html>
<body>

<script id="myScript" src="demo_defer.js" defer></script>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("myScript").defer;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>

demo_defer.js

scriptObject.defer=true;

```
### charst
5.html
```
<!DOCTYPE html>
<html>
<body>

<script id="myScript" src="demo_script_charset.js" charset="UTF-8"></script>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("myScript").charset;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>


```
### async
6.html
```
<!DOCTYPE html>
<html>
<body>

<p id="p1">Hello World!</p>
<script id="myScript" src="demo_async.js" async></script>

<p>executed asynchronously</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("myScript").async;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>

scriptObject.async=true;
```

### scriptObject.text=contents
7.html

```
<!DOCTYPE html>
<html>
<body>

<script id="myScript">
document.write("Hello World!");
</script>


<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("myScript").text;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>

```

## Автозаполнение

Firefox/Chrome/Opera автозаполняют формы по DOMContentLoaded.

Это означает, что если на странице есть форма для ввода логина-пароля, то браузер введёт в неё запомненные значения только по DOMContentLoaded.

если DOMContentLoaded ожидает множества скриптов и стилей, то автозаполнение не сработает до полной их загрузки.

8.html

```
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script type="text/javascript">
    var alreadyrunflag = 0;

    function VanillaRunOnDomReady() {
        document.getElementById("demo").innerHTML = 'Hello There';
    }

if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", function(){
        alreadyrunflag=1; 
        VanillaRunOnDomReady();
    }, false);
else if (document.all && !window.opera) {
    document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');
    var contentloadtag = document.getElementById("contentloadtag")
    contentloadtag.onreadystatechange=function(){
        if (this.readyState=="complete"){
            alreadyrunflag=1;
            VanillaRunOnDomReady();
        }
    }
}
</script>

</body>
</html>

```
## Событие onreadystatechange

Когда серверу посылается запрос, мы хотим выполнить некоторые действия на основе ответа.

Собите onreadystatechange происходит каждый раз, когда свойство readyState (состояние готовности) изменяется.

### Свойство readyState содержит состояние запроса XMLHttpRequest.

#### Три важных свойства объекта XMLHttpRequest:

1. onreadystatechange - Хранит функцию (или имя функции), которая вызывается автоматически каждый раз, когда изменяется свойство readyState
2. readyState - Содержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4: 
```
0: запрос не инициализирован 
1: установлено соединение с сервером
2: запрос получен 
3: обработка запроса 
4: запрос завершен и ответ готов
```
3. status - 200: "OK (все хорошо)" 404: Страница не найдена

В событии onreadystatechange мы указываем, что произойдет, когда ответ с сервера будет получен и готов для обработки.

Когда состояние readyState равно 4 и статус (status) содержит значение 200, это означает, что ответ готов

## window.onload

Обработчик window.onload срабатывает, когда загружается вся страница, включая ресурсы на ней — стили, картинки, ифреймы и т.п.

```
window.onload = function(){
  setTimeout("if (!alreadyrunflag){VanillaRunOnDomReady}", 0);
}//]]> 
```

## VanillaRunOnDomReady

```
var VanillaRunOnDomReady = function() {

}

```

# Добавление и удаление узлов

```
parentElem.appendChild(elem)
```

Добавляет elem в конец дочерних элементов parentElem.

```
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  var newLi = document.createElement('li');
  newLi.innerHTML = 'Привет, мир!';

  list.appendChild(newLi);
</script>
```

## HTML Table

```
var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }

```

### parentElem.insertBefore(elem, nextSibling)

Вставляет elem в коллекцию детей parentElem, перед элементом nextSibling.
```
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  var newLi = document.createElement('li');
  newLi.innerHTML = 'Привет, мир!';

  list.insertBefore(newLi, list.children[1]);
</script>
```
Для вставки элемента в начало достаточно указать, что вставлять будем перед первым потомком:
```
list.insertBefore(newLi, list.firstChild);
```
если вторым аргументом указать null, то insertBefore сработает как appendChild:
```
parentElem.insertBefore(elem, null);
// то же, что и:
parentElem.appendChild(elem)
```

## Метод Node.cloneNode()
Метод Node.cloneNode() возвращает дубликат узла, из которого этот метод был вызван.

var dupNode = node.cloneNode(deep);

- node - Узел который будет клонирован.
- dupNode - Новый узел который будет клоном node
- deep  - Необязательный - true если дети узла должны быть клонированы или false для того чтобы был клонирован только указанный узел.


Клонирование узлов копирует все атрибуты и их значения, в том числе собственных (в линию) перехватчиков. Это не копирует пререхватчики событий, добавленных используя addEventListener() или тех что назначены через свойства элемента (т.е node.onclick = fn).

Дубликат узла, возвращенного cloneNode() не является частью документа, пока не будет добавлен в другой узел, который является частью документа, используя Node.appendChild() или другой метот.Кроме того, не имеет родителя, пока не будет добавлен к другому узлу.

Если deep установлен как false, дочерние узлы не клонируются. Любой текст, который содержит узел также не клонируется, как и содержащийся в одном или более дочернем узле Text.

Если deep установлено как true, все поддеревья (включая текст, который может быть потомком узла Text) копируется тоже. Для пустых узлов (т.е img и input элементов) это не имеет значения установлен ли deep как true или false.

cloneNode() может привести к дублированию идентфикаторов элементов в документе.
Если исходный узел имеет идентфикатор и клон размещен в том же документе, идентификатор должен быть изменен, для того что бы быть уникальным. Имя атрибута также может нуждаться в изменении, в зависимости от будующего имени дубликата.

Чтобы клонировать узел, для добавления к другому документу используйте Document.importNode() вместо этого.

## document.createTextNode(text)

Создает новый текстовый узел с данным текстом:

```
function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }
```

## Метод hasOwnProperty

Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.

```
var VanillaRunOnDomReady = function() {

var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }

    var persone  =  JSON.parse(USER_FILE);

    document.body.appendChild(buildHtmlTable(persone));
}

var alreadyrunflag = 0;

if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", function(){
        alreadyrunflag=1; 
        VanillaRunOnDomReady();
    }, false);
else if (document.all && !window.opera) {
    document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"></script>');
    var contentloadtag = document.getElementById("contentloadtag")
    contentloadtag.onreadystatechange=function(){
        if (this.readyState=="complete"){
            alreadyrunflag=1;
            VanillaRunOnDomReady();
        }
    }
}

window.onload = function(){
  setTimeout("if (!alreadyrunflag){VanillaRunOnDomReady}", 0);
}//]]> 

```
