## 前言
测试大型.md文件的性能问题

## HelloWorld
```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "HelloWorld" << endl;
	return 0;
}
```

## 注释
//  单行注释  

/* */  多行注释  

## 基础入门
### 变量
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 变量：程序执行过程中，会发生变化的值
	// 变量的意义：为一段内存地址起名，方便操作此内存地址
	short a = 10;  // 短整型
	int b = 20;  // 整型
	long c = 20l;  // 长整型
	long long d = 200ll;  // 长长整型
	float e = 20.0f;  // 单浮点数
	double f = 20.0;  // 双浮点数
	bool is_true = false;  // 布尔类型
	char g = 'd';  // 字符类型
	string str = "HelloWorld";  // 字符串类型
	return 0;
}
```

### 常量
```cpp
#include <iostream>
using namespace std;

#define NINE 9  // 使用define定义常量

int main()
{
	// 常量：程序执行过程中，不会发生变化的值
	// 常量的意义：不允许外界操作内存地址，增强安全性
	const int num = 10;  // 使用const定义常量
	cout << NINE << endl;
	return 0;
}
```

### 基本数据类型
#### 整型
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 整数类型
	short a = 10;
	int b = 20;
	long c = 20l;
	long long d = 200ll;
	return 0;
}
```

#### sizeof()
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 20;
	cout << sizeof(a) << endl;  // sizeof()运算符用于计算数据类型或变量的大小
	cout << sizeof(int) << endl;
	return 0;
}
```

#### 浮点型
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 浮点数类型
	float f = 20.0f;
	double d = 20.0;
	return 0;
}
```

#### 字符型
```cpp
#include <iostream>
using namespace std;

int main()
{
	char a = 'a';
	char b = 29;
	return 0;
}
```

#### 字符串
```cpp
#include <iostream>
using namespace std;

int main()
{
	char chars[] = "HelloWorld";  // C语言式字符串定义形式
	string a = "HelloWorld";  // C++式字符串定义形式，注意，string不是基本数据类型

	cout << chars << endl;
	cout << a << endl;
	return 0;
}
```

#### 布尔类型
```cpp
#include <iostream>
using namespace std;

int main()
{
	bool is_ture = false;
	return 0;
}
```

### 命名规范
除了类名和类中的函数使用驼峰命名法，其余使用蛇形命名法  

### 数据的输入
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 0;
	cin >> a;
	cout << a << endl;
	return 0;
}
```

### 运算符
#### 算术运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 20;
	int b = 30;
	cout << a + b << endl;  // 加
	cout << a - b << endl;  // 减
	cout << a * b << endl;  // 乘
	cout << a / b << endl;  // 除
	cout << a % b << endl;  // 取模

	cout << a + b++ << endl;  // 50  后置++，先使用变量，再自增变量
	cout << a + ++b << endl;  // 52  前置++，先自增变量，再使用变量
	cout << a + b-- << endl;  // 52  后置--，先使用变量，再自减变量
	cout << a + --b << endl;  // 50  前置--，先自减变量，再使用变量

	return 0;
}
```

#### 赋值运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 10;
	a += 10;  // a = a + 10
	cout << a << endl;

	a = 10;
	a -= 20;  // a = a - 10
	cout << a << endl;

	a = 10;
	a *= 20;  // a = a * 20
	cout << a << endl;

	a = 10;
	a /= 20;  // a = a / 20
	cout << a << endl;

	a = 10;
	a %= 10;  // a = a % 10
	cout << a << endl;

	return 0;
}
```

#### 比较运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 20;
	int b = 15;
	cout << (a > b) << endl;  // 大于
	cout << (a < b) << endl;  // 小于

	int c = 20;

	cout << (a >= c) << endl;  // 大于等于
	cout << (b <= c) << endl;  // 小于等于
	cout << (a == c) << endl;  // 等于
	cout << (a != c) << endl;  // 不等于

	return 0;
}
```

#### 逻辑运算符
```cpp
#include <iostream>
using namespace std;

int main()
{	
	int a = 20;
	int b = 15;
	int c = 25;
	if (a > b && a > c)  // 并
		cout << "测试通过" << endl;
	else
		cout << "不通过" << endl;

	if (a > b || a > c)  // 或
		cout << "测试通过" << endl;
	else
		cout << "不通过" << endl;

	if (!true)  // 反逻辑
		cout << "测试通过" << endl;
	else
		cout << "不通过" << endl;
	return 0;
}
```

#### 位运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 将十进制数转换成二进制数  ->  5 = 1 + 2 + 2  ->  1 * 2^0 + 0 * 2^1 + 1 * 2^2  ->  101  ->  00000101
	// 计算二进制位有多少个1  ->  如果一个数 按位与(&) 1得到的结果为1，则最右位必然为1
	int a = 5;
	int count = 0;
	while (a != 0)
	{
		if ((a & 1) == 1)   // 按位与
		{
			count++;
		}
		a = a >> 1;  // 左移运算符
	}
	cout << count << endl;

	// 修改二进制位中的某一位
	int num = 5;
    // 按位或  右移运算符
	int i = num | (1 << 4);  // 00000001  ->  00010000  ->  (00000101  |  00010000)  ->  00010101
	cout << i << endl;

    // 不创建变量交换两个变量的值
	int c = 20;
	int d = 10;
	c = c ^ d;  // 按位异或
	d = c ^ d;
	c = c ^ d;
	cout << c << endl;
	cout << d << endl;

	int e = ~c;  // 按位取反
	cout << e << endl;
	return 0;
}
```

#### 杂项运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 10;
	cout << &a << endl;  // 取地址

	int b = 20;
	cout << (a > b ? a : b) << endl;  // 条件运算符(三目操作符)

	int c = (a = a + b, b = a + 2 * b, a - b);  // 逗号表达式，结果为最后一个表达式
	cout << c << endl;

	cout << sizeof(a) << endl;
	return 0;
}
```

### 选择结构
用以进行判断的结构  

#### if语句
```cpp
#include <iostream>
using namespace std;

int main()
{
	int score = 0;
	cin >> score;

	if (score >= 80)  // 如果需要执行的语句为一行，可以省略大括号
	{
		printf("优秀");
	}
	else if (score < 80 && score >= 60)
	{
		printf("良好");
	}
	else if (score < 60 && score >= 45)
	{
		printf("差");
	}
	else
	{
		printf("超差");
	}
	return 0;
}
```

##### 省略大括号的if语句
```cpp
#include <iostream>
using namespace std;

int main()
{
	int score = 0;
	cin >> score;

	if (score >= 80)
		printf("优秀");
	else if (score < 80 && score >= 60)
		printf("良好");
	else if (score < 60 && score >= 45)
		printf("差");
	else
		printf("超差");
	return 0;
}
```

#### switch语句
```cpp
#include <iostream>
using namespace std;

int main()
{
	int score = 0;
	cin >> score;

	switch (score)
	{
    case 60:
    case 70:
		printf("良好");
		break;
	case 80:
		printf("优秀");
		break;
	default:
		printf("不及格");
		break;
	}

	return 0;
}
```

### 循环结构
用以重复执行操作的结构  

#### while循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	int i = 0;
	while (i < 10)
	{
		if (i == 5)
		{
			i++;
			continue;
		}
		else if (i == 8)
		{
			break;
		}
		cout << i << endl;
		i++;
	}
	return 0;
}
```

##### 省略大括号的while循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	int num = 0;

	while (num++ < 10)
		cout << "HelloWorld" << endl;
	return 0;
}
```

#### for循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0;i < 10;i++)
	{
		if (i == 4)
		{
			continue;
		}
		else if (i == 8)
		{
			break;
		}
		printf("%d", i);
	}
	return 0;
}
```

##### 省略大括号的for循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0;i < 10;i++)
		cout << "HelloWorld" << endl;
	return 0;
}
```

#### do...while循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	int i = 0;
	do
	{
		cout << i << endl;
		i++;
	} while (i < 10);
	return 0;
}
```

##### 省略大括号的do...while循环
```cpp
#include <iostream>
using namespace std;

int main()
{
	int num = 0;
	do
		cout << "HelloWorld" << endl;
	while (++num < 10);
	return 0;
}
```

### 跳转语句
#### goto语句
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 10;

yhlight:  // 标识
	cout << a << endl;

	while (a < 100)
	{
		if (a == 50)
		{
			goto yhlight;  // goto语句可以跳转至任意标识处
		}
		a++;
	}
}
```

### 数组
#### 一维数组
```cpp
#include <iostream>
using namespace std;

int main()
{
	int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	int len = sizeof(arr) / sizeof(arr[0]);  // 计算数组的元素个数
	for (int i = 0;i < len;i++)
	{
		cout << arr[i] << " ";
	}
	return 0;
}
```

#### 二维数组
```cpp
#include <iostream>
using namespace std;

int main()
{
	int arr[][4] = { {1, 2, 3, 4}, {4, 5, 6, 7}, {7, 8, 9, 10} };  // 二维数组可以省略行，不能省略列

	int len = sizeof(arr) / sizeof(arr[0]);  // 获取二维数组有多少行
	cout << len << endl;
	int len2 = sizeof(arr[0]) / sizeof(arr[0][0]);  // 获取二维数组某一行的元素个数
	cout << len2 << endl;
	for (int i = 0;i < len;i++)
	{
		for (int j = 0;j < len2;j++)
		{
			cout << arr[i][j] << " ";
		}
	}
	return 0;
}
```

### 函数
#### 函数的创建与使用
```cpp
#include <iostream>
using namespace std;

int add(int x, int y)
{
	return x + y;
}

int add2(int arr[], int arr2[], int len, int len2)
{
	// 函数接收数组并不是接收整个数组，而是数组的首元素地址，所以不能在函数内部使用sizeof计算数组元素个数

	int result = 0;

	for (int i = 0;i < len;i++)
	{
		result += i;
	}

	for (int i = 0;i < len2;i++)
	{
		result += i;
	}

	return result;
}

int main()
{
	int num = 10;
	int num2 = 20;
	cout << add(num, num2) << endl;

	int arr[] = { 1,2,3,4,5 };
	int arr2[] = { 6,7,8,9,10 };
	int len = sizeof(arr) / sizeof(arr[0]);
	int len2 = sizeof(arr2) / sizeof(arr2[0]);
	cout << add2(arr, arr2, len, len2);
	return 0;
}
```

#### 函数的声明与函数的实现
```cpp
#include <iostream>
using namespace std;

int add(int x, int y);  // 函数的声明

int main()
{
	int num = 10;
	int num2 = 20;
	cout << add(num, num2) << endl;
	return 0;
}

int add(int x, int y)  // 函数的实现
{
	return x + y;
}
```

#### 实际参数与形式参数
```cpp
#include <iostream>
using namespace std;

int add(int x, int y)  // 形式参数：用于接收外部传入的参数的参数
{
	return x + y;
}

int main()
{
	cout << add(3, 5) << endl;  // 实际参数：传递给函数的参数
	return 0;
}
```

#### 传值调用与传址调用
```cpp
#include <iostream>
using namespace std;

void test(int x)  // 传值调用
{
	x = 20;
}

void test2(int* x)  // 传址调用
{
	*x = 20;
}

int main()
{
	// 函数传递参数的机制分为传值调用与传址调用
	// 形式参数是函数调用后生成的拷贝实际参数的副本
	// 形式参数主要目的是拷贝实际参数的值，提供一个副本给函数使用，这个副本在函数结束后会销毁

	// 上述过程可用伪代码表示
	// void test(int x)
	// {
	// 	int copy = x;
	// 	copy = 20;
	// }

	// 传值调用：将变量的值传递给函数参数，函数参数是拷贝了外部变量的值副本，对其进行修改不会影响外部变量  
	// 传址调用：将变量的地址传递给函数参数，函数参数是指向此变量地址的指针，对其进行修改会影响外部变量

	int num = 10;
	test(num);
	cout << num << endl;

	test2(&num);  // 传递变量的地址
	cout << num << endl;
	return 0;
}
```

#### 函数的链式访问
```cpp
#include <iostream>
using namespace std;

int sum(int a, int b)
{
	return a + b;
}

bool is_even(int num)
{
	return num % 2 == 0;
}

int main()
{
	cout << is_even(sum(20, 50)) << endl;  // 将一个函数的返回值作为另一个函数的参数，这样的行为被称为链式访问
	return 0;
}
```

#### 函数的分文件书写
```cpp
#include <iostream>

#include "myfunctions.h"  // 在需要使用函数的cpp文件中导入声明函数的头文件
using namespace std;

int main()
{
	cout << sum(20, 30) << endl;
	return 0;
}
```


其他.cpp文件  
```cpp
#include <iostream>

int sum(int a, int b)  // 在cpp文件实现函数
{
	return a + b;
}
```



.h头文件  
```cpp
#pragma once

int sum(int a, int b);  // 在头文件声明函数
```

#### 形式参数的默认值
```cpp
#include <iostream>
using namespace std;

int sum(int a = 20, int b = 30)  // 形式参数可以具有默认值
{
	return a + b;
}

// int sum2(int a = 20, int b, int c = 30);  // 从第一个具有默认值的形式参数开始，后续的参数皆需要具有默认值

int sum2(int a = 10, int b = 10, int c = 10);  // 函数的声明与实现不能同时具有默认值

int main()
{
	cout << sum() << endl;

	cout << sum2() << endl;
	return 0;
}

int sum2(int a, int b, int c)
{
	return a + b + c;
}
```

#### 占位参数
```cpp
#include <iostream>
using namespace std;

void test(int x, int = 20)  // 占位参数
{
	cout << x << endl;
}

int main()
{
	test(10);
	return 0;
}
```

#### 函数的重载
```cpp
#include <iostream>
using namespace std;

int sum(int x, int y)
{
	cout << "形式参数int x int y" << endl;
	return x + y;
}

// 形参的个数不同
int sum(int x, int y, int z)
{
	cout << "形式参数int x int y int z" << endl;
	return x + y + z;
}

// 形参的类型不同
int sum(double x, double y)
{
	cout << "形式参数double x double y" << endl;
	return x + y;
}

// 形参的顺序不同
int sum(int x, double y)
{
	cout << "形式参数int x double y" << endl;
	return x + y;
}

int sum(double x, int y)
{
	cout << "形式参数double x int y" << endl;
	return x + y;
}

int main()
{
	// 函数的重载是一种编程机制
	// C++允许同名函数因为形参的个数不同，形参的类型不同，形参的顺序不同而存在
	// 满足形参的个数不同，形参的类型不同，形参的顺序不同的同名参数称为函数的重载
	// 编译器会根据重载的函数自行选择最优的函数

	cout << sum(20, 30) << endl;

	cout << sum(20.0, 30.0) << endl;

	cout << sum(20, 20.0) << endl;
	return 0;
}
```

#### 数组作函数参数
```cpp
#include <iostream>
using namespace std;

void print_arr(int arr[], int len)
{
	for (int i = 0; i < len; i++)
	{
		cout << arr[i] << " ";
	}
	cout << endl;
}

int main()
{
	int arr[] = { 1,2,3,4,5 };
	int len = sizeof(arr) / sizeof(arr[0]);  // 不能在函数内使用sizeof()来获取数组长度
	print_arr(arr, len);
	return 0;
}
```

#### 函数的递归
```cpp
#include <iostream>
using namespace std;

// 函数调用自身的行为称为递归
// 递归要确保存在限制条件，以便在无限的循环中跳出循环
// 确保每一次调用递归后越来越接近限制条件
// 递归的性能不佳，若多次递归，可能会耗尽程序的内存，造成栈溢出

int factorial(int num)  // 使用递归实现求n的阶乘(不考虑溢出)
{
	if (num == 1)
	{
		return 1;
	}
	return num * factorial(num - 1);
}

int main()
{
	cout << factorial(5) << endl;
	return 0;
}
```

### 枚举
```cpp
#include <iostream>
using namespace std;

// 枚举类型用于快速定义一组常量

enum YhLight
{
	YHLIGHT = 1145,
	SHUIYANG = 19810,
	HUANLAITING = 554321
};

int main()
{
	cout << YHLIGHT << endl;  // 直接使用枚举常量

	enum YhLight yhlight = YHLIGHT;  // 创建枚举类型变量
	cout << yhlight << endl;
	return 0;
}
```

### 指针
#### 指针的创建与使用
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 指针是计算机科学中一个用于存储内存地址的变量
	// 指针存储的地址指向计算机内存中某个特定位置的数据存储单元
	// 指针通过存储目标数据的内存地址实现对该数据的间接访问
	int a = 20;
	int* pa = &a;  // 指针的创建
	cout << pa << endl;  // 输出指针所指向的内存地址
	cout << *pa << endl;  // 解引用操作，访问指针所指向的内存地址
	return 0;
}
```

#### 空指针
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 如果一个指针不指向任何地址，则为空指针
	int* p = NULL;
	return 0;
}
```

#### 测定指针类型的大小
```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << sizeof(char*) << endl;
	cout << sizeof(short*) << endl;
	cout << sizeof(int*) << endl;
	cout << sizeof(long*) << endl;
	cout << sizeof(long long*) << endl;
	cout << sizeof(float*) << endl;
	cout << sizeof(double*) << endl;
	cout << sizeof(string*) << endl;

	// 对于32平台来说，无论什么类型的指针，指针大小都是4字节
	// 对于64平台来说，无论什么类型的指针，指针大小都是8字节
	return 0;
}
```

#### 探讨指针类型的意义
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 指针的类型决定解引用权限的大小
	// 解引用权限决定解引用操作时能够覆写多少个字节
	int a = 100000;
	int* pa = &a;
	*pa = 0;  // int类型的指针能够覆写4个字节

	cout << a << endl;  // 输出结果为0

	a = 100000;
	// C++不允许不同类型的指针任意进行转换，需要使用reinterpret_cast
	// 将在后续学习reinterpret_cast的用法
	char* pc = reinterpret_cast<char*>(&a);
	*pc = 0;  // char的指针只能够覆写1个字节
	cout << a << endl;  // 输出结果为99840
	return 0;
}
```

#### 指针的步长
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 步长：指针移动的基长度
	// 基长度：指针对应的数据类型的字节数
	// 不同类型在内存中占用的字节不同，相应的指针覆写的字节数也不同

	int arr[] = { 1,2,3,4,5 };
	// short类型指针步长为两个字节，一次移动两个字节，一次覆写两个字节
	short* p = (short*)arr;

	for (int i = 0; i < 4; i++)
	{
		*(p + i) = 0;  // 指针移动多少个单位的步长
	}

	for (int i = 0; i < 5; i++)
	{
		cout << arr[i] << " ";
	}
	return 0;
}
```

#### 指针的运算
```cpp
#include <iostream>
using namespace std;

int main()
{
	int arr[] = { 1,2,3,4,5,6,7,8,9,10 };

	int* arr_last = &arr[10];

	cout << arr_last - arr << endl;  // 两个指针的运算将得到元素个数
	return 0;
}
```

#### 野指针
指向不可知，不确切，不合法的内存地址的指针称为野指针  

##### 野指针成因
###### 指针未初始化
```cpp
#include <iostream>
using namespace std;

int main()
{
	int* p;  // 没有初始化，局部变量不初始化，默认随机值
	*p = 20;  // 非法访问内存
	return 0;
}
```

###### 指针越界访问
```cpp
#include <iostream>
using namespace std;

int main()
{
	int arr[10] = { 0 };
	for (int i = 0;i < 11;i++)  // 越界访问
	{
		*(arr + i) = i;
	}
	return 0;
}
```

###### 指针指向的内存已被释放
```cpp
#include <iostream>
using namespace std;

int* test()
{
	int a = 20;
	return &a;
}

int main()
{
	int* p = test();
	*p = 20;
	return 0;
}
```

#### const与指针
```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 20;
	int b = 40;

	// 当const修饰 int* pa 时，不允许修改值，但允许修改指向
	// 不允许修改值，但允许修改指向的指针被称为指针常量
	const int* pa = &a;
	// *pa = 20;  // 不可以
	pa = &b;  // 可以

	// 当const修饰*ptr时，不允许修改指向，但允许修改值
	// 不允许修改指向，但允许修改值的指针被称为常量指针
	int* const ptr = &a;
	*ptr = 40;  // 可以
	// ptr = &b;  // 不可以
	return 0;
}
```

#### 数组名与首元素地址
```cpp
#include <iostream>
using namespace std;

int main()
{
	int arr[] = { 1,2,3,4,5 };
	// 数组名可表示数组首元素的地址
	cout << "数组名 " << arr << endl;
	cout << "首元素地址 " << &arr[0] << endl;

	cout << endl;

	int arr2[][5] = { {1,2,3,4,5},{2,3,4,5,6} };
	// 数组名可表示数组首元素的地址
	cout << "数组名 " << arr2 << endl;
	cout << "首元素地址 " << &arr2[0] << endl;
	return 0;
}
```

#### 数组退化
```cpp
#include <iostream>
using namespace std;

void print_arr(int arr[], int len)
{
	for (int i = 0; i < len; i++)
	{
		cout << arr[i] << " ";
	}
	cout << endl;
}

int main()
{
	// 无法在函数内部使用sizeof()计算数组长度是因为数组会退化成指针，丢失长度信息
	int arr[] = { 1,2,3,4,5 };
	int len = sizeof(arr) / sizeof(arr[0]);
	print_arr(arr, len);
	return 0;
}
```

#### 指针作函数参数
```cpp
#include <iostream>
using namespace std;

void swap(int* x, int* y)
{
	int temp = *x;
	*x = *y;
	*y = temp;
}

void print_arr(int* arr, int len)
{
	for (int i = 0; i < len; i++)
	{
		cout << *(arr + i) << " ";
		// cout << arr[i] << " ";
	}
	cout << endl;
}

int main()
{
	int num = 10;
	int num2 = 20;
	cout << num << " " << num2 << endl;
	swap(&num, &num2);
	cout << num << " " << num2 << endl;

	int arr[] = { 1, 2, 3, 4, 5 };
	int len = sizeof(arr) / sizeof(arr[0]);
	print_arr(arr, len);
	return 0;
}
```

#### 指针作函数返回值
```cpp
#include <iostream>
using namespace std;

int* test(int* x)  // 指针作函数返回值
{
	return x;
}

int main()
{
	int num = 20;
	*test(&num) = 40;  // 指针作函数返回值
	cout << num << endl;
	return 0;
}
```

### 结构体
#### 结构体的创建与使用
```cpp
#include <iostream>
using namespace std;

struct yhlight
{
	string name;
	int age;
	string description;
};

struct yhlight2
{
	string name;
	int age;
	string description;
}s2 = { "没睡醒的扬,",22,"光辉追随" };   // 创建结构体的同时创建结构体变量

int main()
{
	struct yhlight yh = { "yinghuolight",18,"荧火光第一次席" };
	cout << yh.name << " " << yh.age << " " << yh.description << endl;

	// 使用指针简化访问操作
	struct yhlight* pyh = &yh;
	cout << (*pyh).name << " " << (*pyh).age << " " << (*pyh).description << endl;
	cout << pyh->name << " " << pyh->age << " " << pyh->description << endl;  // 成员访问操作符
	return 0;
}
```

#### 结构体数组
```cpp
#include <iostream>
using namespace std;

struct yhlight
{
	string name;
	int age;
	string description;
};

int main()
{
	struct yhlight yh[] =
	{
		{"荧火light",18,"第一次席"},
		{"没醒扬",22,"第二次席"},
		{"幻来听",18,"第三次席"}
	};

	for (int i = 0; i < 3; i++)
	{
		cout << yh[i].name << " " << yh[i].age << " " << yh[i].description << endl;
	}
	return 0;
}
```

#### 结构体嵌套结构体
```cpp
#include <iostream>
using namespace std;

struct huanlaiting
{
	string name;
	int age;
};

struct yhlight
{
	string name;
	int age;
	string description;
	struct shuiyang
	{
		string name;
		int age;
	}sy;
	struct huanlaiting huanlaiting;
};

int main()
{
	struct yhlight yh = { "荧火light",18,"荧火光领袖", {"睡扬",18} };
	cout << yh.name << " " << yh.age << " " << yh.description << " " << yh.sy.name << " " << yh.sy.age << endl;
	yh.huanlaiting.name = "幻来听";
	yh.huanlaiting.age = 18;
	cout << yh.huanlaiting.name << " " << yh.huanlaiting.age << endl;
	return 0;
}
```

#### 结构体作为函数参数
```cpp
#include <iostream>
using namespace std;

struct huanlaiting
{
	string name;
	int age;
};

void to_print(huanlaiting huanlaiting) {
	cout << huanlaiting.name << " " << huanlaiting.age << endl;
}

int main()
{
	// struct huanlaiting huanlaiting = { "幻来听",18 };
	to_print({ "幻来听",18 });
	return 0;
}
```

## 核心编程
### new运算符
```cpp
#include <iostream>
using namespace std;

int main()
{
	// new运算符用于动态分配内存并返回相应类型的指针
	int* p = new int();  // 调用构造函数，默认初始化为0
	int* ptr = new int(10);  // 初始化为10
	int* ptr2 = new int;  // 没有初始化，返回一些垃圾值
	int* ptr3 = new int[10];  // 返回一个指向容纳10个数组的指针
	cout << p << endl;
	cout << ptr << endl;
	cout << ptr2 << endl;
	cout << ptr3 << endl;

	cout << *p << endl;
	cout << *ptr << endl;
	cout << *ptr2 << endl;
	for (int i = 0;i < 10;i++)
	{
		*(ptr3 + i) = i;
		cout << *(ptr3 + i) << " ";
	}

	// 由new分配的内存需要手动释放内存
	// 释放内存，释放后该地址不可再访问，如果是数组，需要使用delete[]
	delete p;
	delete ptr;
	delete ptr2;
	delete[] ptr3;
	return 0;
}
```

### 引用
#### 引用的创建与使用
```cpp
#include <iostream>
using namespace std;

int main()
{
	// 引用用于给变量起一个别名
	// 引用必须初始化，且初始化后不可以更改，引用的本质是指针常量
	// 引用是C++重要的高性能特征，引用提供了直接访问原始数据的途径，无需像指针一样进行解引用操作
	int a = 20;
	int& b = a;

	b = 60;
	cout << a << endl;
	return 0;
}
```

#### 引用作函数参数
```cpp
#include <iostream>
using namespace std;

// 引用作为函数参数能够避免副本变量的创建，节省内存
void swap(int& a, int& b)
{
	int tmp = a;
	a = b;
	b = tmp;
}

int main()
{
	int a = 10;
	int b = 20;
	swap(a, b);
	cout << a << endl;
	cout << b << endl;
	return 0;
}
```

#### 引用作函数返回值
```cpp
#include <iostream>
using namespace std;

int& test(int& x)  // 引用作函数返回值
{
	return x;
}

int main()
{
	int num = 20;
	test(num) = 40;  // 引用作函数返回值
	cout << num << endl;
	return 0;
}
```

#### 常量引用
```cpp
#include <iostream>
using namespace std;

int add(int& a, int& b)
{
	return a + b;
}

int add2(const int& a, const int& b)  // 常量引用
{
	return a + b;
}

int main()
{
	// C++不允许引用临时存在的值，这导致引用作为函数参数时，必须传递变量而不能直接传递值
	// 这大大限制了程序的灵活性，为了解决此问题，C++引入了常量引用

	cout << add(12, 30) << endl;  // 必须传递变量而不能直接传递值
	cout << add2(12, 30) << endl;  // 常量引用
	return 0;
}
```

### static关键字
```cpp
#include <iostream>
using namespace std;

// 由static修饰的全局变量被称为静态全局变量
// 静态全局变量会改变原有的链接属性，无法被其他文件引用
static int static_num = 10;

// 由static修饰的全局函数被称为静态函数
// 静态函数无法被外部文件访问
static void test()
{
	cout << "静态函数" << endl;
}

int& test2()
{
	// 由static修饰的局部变量被称为静态局部变量
	// 静态局部变量作用域不变，生命周期延长，程序结束时才销毁
	// 静态局部变量在整个程序运行期间只会创建一次
	static int static_int = 20;
	cout << static_int << endl;
	return static_int;
}

int main()
{
	test2() = 40;
	cout << endl;
	test2();
	return 0;
}
```

### 默认初始化
```cpp
#include <iostream>
using namespace std;

int num_glo;  // 全局变量默认初始化为0

int main()
{
	// C++不会对变量默认初始化，在使用之前必须初始化
	char ch;
	short num_sort;
	int num_int;
	long num_long;
	long long num_ll;
	float num_float;
	double num_double;
	bool boolean = false;

	string str;  // 字符串类型不是基本数据类型，属于自定义数据类型，是封装char数组形成的类

	// cout << ch << endl;
	// cout << num_sort << endl;
	// cout << num_int << endl;
	// cout << num_long << endl;
	// cout << num_ll << endl;
	// cout << num_float << endl;
	// cout << num_double << endl;
	// cout << boolean << endl;
	// cout << str << endl;

	// 创建一个变量时，我们需要对其进行显式初始化，防止使用时出异常
	// 字符类型，整型，浮点型，皆初始化为0
	ch = 0;
	num_sort = 0;
	num_int = 0;
	num_long = 0;
	num_ll = 0;
	num_float = 0;
	num_double = 0;

	// 布尔类型初始化为false
	boolean = false;

	// 字符串类型初始化为""
	str = "";

	cout << ch << endl;
	cout << num_sort << endl;
	cout << num_int << endl;
	cout << num_long << endl;
	cout << num_ll << endl;
	cout << num_float << endl;
	cout << num_double << endl;
	cout << boolean << endl;
	cout << str << endl;

	// 静态变量和全局变量默认初始化为0
	static int num_static;
	cout << num_glo << endl;
	cout << num_static << endl;

	// 指针类型不会默认初始化，在使用之前必须初始化
	int* p;
	// cout << p << endl;
	return 0;
}
```

### 面向对象
#### 类的创建与使用
```cpp
#include <iostream>
using namespace std;

// 类是存储数据，数据结构与数据操作的集合体
// 数据结构  ->  数组等数据的集合
// 数据操作  ->  函数等操作数据的结构
class YhLight
{
public:  // 权限修饰符
	string name;  // 成员变量
	int age;

	void show()  // 成员函数
	{
		cout << name << " " << age << endl;
	}
};

int main()
{
	// 类的对象是访问与操作类的数据的实体
	// 每一个类的对象都具有一份类的数据，对象之间通常不共享数据
	// 类的对象能够使类表现一定的行为

	YhLight yhlight;  // 创建类的对象
	yhlight.name = "YhLight";  // 通过对象访问成员变量与调用成员函数
	yhlight.age = 18;
	yhlight.show();  // 类的对象能够使类表现一定的行为

	YhLight yhlight2;  // 每一个类的对象都具有一份类的数据，对象之间通常不共享数据
	yhlight2.name = "yinghuolight";
	yhlight2.age = 22;
	yhlight2.show();
	return 0;
}
```

#### 权限修饰符
```cpp
#include <iostream>
using namespace std;

// 有三种权限修饰符，决定外部能否访问类内部的成员变量或方法
// public 公开权限，类内部，子类，类外部能够访问此权限修饰的成员变量或函数
// protected 保护权限，类内部，子类能够访问，类外部无法访问
// private 私有权限，只能被类内部访问
class YhLight
{
private:  // 私有化成员变量，防止外部直接访问成员变量
	string m_name;
	int m_age;

public:
	// 提供相应的get / set函数访问成员变量
	void setName(const string& name)
	{
		m_name = name;
	}

	string getName()
	{
		return m_name;
	}

	void setAge(const int& age)
	{
		m_age = age;
	}

	int getAge()
	{
		return m_age;
	}

	void show()
	{
		cout << m_name << " " << m_age << endl;
	}
};

int main()
{
	YhLight yhlight;
	yhlight.setName("荧火light");
	yhlight.setAge(18);
	yhlight.show();
	return 0;
}
```

#### 类与结构体的区别
```cpp
#include <iostream>
using namespace std;

struct Shuiyang
{
	string name;
	int age;
};

class YhLight
{
	string m_name;
	int m_age;
};

int main()
{
	struct Shuiyang shuiyang = { "荧火light",18 };
	shuiyang.name = "yhlight";  // 结构体默认公开

	YhLight yhlight;
	// yhlight.m_name = "yhlight";  // 类默认私有
	return 0;
}
```

#### 构造函数与析构函数
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight()  // 构造函数，类创建对象时调用此函数，构造函数常用于初始化成员变量
	{
		cout << "调用默认构造函数" << endl;
	}

	YhLight(const string& name, const int& age)  // 为了方便区别形参与成员属性，成员常量常以m_开头
	{
		m_name = name;
		m_age = age;
		cout << "调用有参构造函数" << endl;
	}

	~YhLight()  // 析构函数，对象销毁时调用此函数
	{
		cout << "调用析构函数" << endl;
	}

	void show()
	{
		cout << m_name << " " << m_age << endl;
	}

private:
	string m_name;
	int m_age;
};

int main()
{
	YhLight yhlight;  // 默认构造函数
	YhLight yhlight2("荧火light", 18);  // 带参构造函数
	yhlight2.show();
	return 0;
}
```

#### 成员函数的类外实现
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight();

	YhLight(const string& name, const int& age);

	void show();

private:
	string m_name;
	int m_age;
};

YhLight::YhLight()
{
	m_name = "";
	m_age = 0;
}

YhLight::YhLight(const string& name, const int& age)
{
	m_name = name;
	m_age = age;
}

void YhLight::show()
{
	cout << m_name << " " << m_age << endl;
}

int main()
{
	return 0;
}
```

#### 类的分文件书写
```cpp
#include <iostream>
#include "YhLight.h"
using namespace std;

int main()
{
	YhLight yhlight;
	yhlight.setName("荧火light");
	yhlight.setAge(18);
	yhlight.toShow();
	return 0;
}
```



YhLight.cpp  
```cpp
#include "YhLight.h"

YhLight::YhLight()
{
	m_name = "YhLight";
	m_age = 0;
}

YhLight::YhLight(const string& name, const int& age)
{
	m_name = name;
	m_age = age;
}

YhLight::~YhLight()
{

}

void YhLight::setName(const string& name)
{
	m_name = name;
}

string YhLight::getName()
{
	return m_name;
}

void YhLight::setAge(const int& age)
{
	m_age = age;
}

int YhLight::getAge()
{
	return m_age;
}

void YhLight::toShow()
{
	cout << m_name << " " << m_age << endl;
}
```



YhLight.h  
```cpp
#pragma once
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight();

	YhLight(const string& name, const int& age);

	~YhLight();

	void setName(const string& name);

	string getName();

	void setAge(const int& age);

	int getAge();

	void toShow();

private:
	string m_name;
	int m_age;
};
```

#### 对象创建方式
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight()
	{

	}

	YhLight(const int& age)
	{
		m_age = age;
	}

	YhLight(const string& name, const int& age)
	{
		m_name = name;
		m_age = age;
	}

	void show()
	{
		cout << m_name << " " << m_age << endl;
	}

private:
	string m_name;
	int m_age;
};

int main()
{
	// 常规创建对象(推荐)
	YhLight yhlight;
	YhLight yhlight2("荧火light", 18);

	// 显示法，(建议使用这一种方式创建对象)[x]，实际情况是不建议使用这种方法创建对象
	YhLight yhlight3 = YhLight();
	YhLight yhlight4 = YhLight("荧火light", 18);

	// 匿名对象
	YhLight("荧火light", 18).show();  // 当前行执行结束后，立即销毁

	// 隐式类型转换，强烈避免这种方法
	YhLight yhlight5 = { "荧火light" ,18 };
	yhlight5.show();

	YhLight yhligh6 = 18;  // 只要构造器存在，即可发生隐式类型转换
	yhligh6.show();
	return 0;
}
```

#### 拷贝构造函数
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:

	YhLight(const string& name, const int& age)
	{
		m_name = name;
		m_age = age;
	}

	YhLight(const YhLight& yhlight)  // 拷贝构造函数
	{
		m_name = yhlight.m_name;
		m_age = yhlight.m_age;
	}

	void show()
	{
		cout << m_name << " " << m_age << endl;
	}

private:
	string m_name;
	int m_age;
};

int main()
{
	YhLight yhlight("yinghuolight", 18);
	YhLight yhlight2(yhlight);  // 拷贝构造函数
	yhlight2.show();
	return 0;
}
```

#### 拷贝构造函数调用时机
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name, const int& age)
	{
		m_name = name;
		m_age = age;
	}

	YhLight(const YhLight& yhlight)
	{
		m_name = yhlight.m_name;
		m_age = yhlight.m_age;
		cout << "拷贝构造函数" << endl;
	}

	void toShow()
	{
		cout << m_name << " " << m_age << endl;
	}

private:
	string m_name;
	int m_age;
};

void test(YhLight yhlight)  // 类对象作为函数参数时，调用拷贝构造函数
{

}

YhLight test2(YhLight yhlight)
{
	return yhlight;  // 作为返回值类型，调用构造函数
}

int main()
{
	YhLight yhlight("荧火light", 18);
	YhLight yhlight2(yhlight);  // 调用拷贝构造函数

	cout << endl;

	test(yhlight);

	cout << endl;

	test2(yhlight);
	return 0;
}
```

#### 深拷贝与浅拷贝
```cpp
#include <iostream>
using namespace std;

class Shuiyang
{
public:
	Shuiyang(const string& name, const int& age)
	{
		m_name = name;
		m_age = new int(age);
	}

	~Shuiyang()
	{
		delete m_age;  // 释放内存空间
	}

private:
	string m_name;
	int* m_age;
};

class YhLight
{
public:
	YhLight(const string& name, const int& age, const double& skill)
	{
		m_name = name;
		m_age = age;
		m_skill = new double(skill);
	}

	YhLight(const YhLight& yhlight)
	{
		m_name = yhlight.m_name;
		m_age = yhlight.m_age;
		m_skill = new double(*yhlight.m_skill);  // 分配一块新的内存地址
	}

	~YhLight()
	{
		if (m_skill != NULL)
		{
			delete m_skill;
			m_skill = NULL;
		}
	}

private:
	string m_name;
	int m_age;
	double* m_skill;
};

int main()
{
	// 编译器默认为每一个类提供一个拷贝构造函数
	// 默认的拷贝构造函数执行浅拷贝操作
	// 精准拷贝原对象成员变量的值的拷贝操作称为浅拷贝操作
	// 对于基本数据类型，浅拷贝操作将拷贝其对应的值
	// 如果是指针，浅拷贝操作将拷贝其对应的地址
	// 浅拷贝操作简单拷贝了指针所指向的地址，并没有考虑到对象销毁之后，其对应的地址也将被释放
	// 当其他通过浅拷贝操作创建的对象被销毁时，将对一块已经释放的内存地址进行二次释放
	// 释放一块已经释放的内存地址是极其严重的安全问题

	Shuiyang shuiyang("Shuiyang", 18);
	// Shuiyang shuiyang2(shuiyang);  // m_skill所指向的内存地址已被释放

	// 需要自制拷贝构造函数与析构函数
	// 自制的拷贝构造函数需要执行深拷贝操作
	// 精准拷贝原对象的资源的拷贝操作称为深拷贝操作
	// 对于基本数据类型，深拷贝操作将拷贝其对应的值
	// 如果是指针，深拷贝操作将拷贝其对应的数据，并分配一块新的内存

	YhLight yhlight("yinghuolight", 24, 20.0);
	YhLight yhlight2(yhlight);
	return 0;
}
```

#### 构造函数的初始化列表
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name = "yinghuolight", const int& age = 18) : name(name), age(age) {};

	void showInfo()
	{
		cout << name << " " << age << endl;
	}
private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight;
	yhlight.showInfo();
	return 0;
}
```

#### 类对象作为类成员变量
```cpp
#include <iostream>
using namespace std;

class Shuiyang {
public:
	Shuiyang(const string& name = "shuiyang", const int& age = 18) :name(name), age(age) {};

	void showInfo()
	{
		cout << name << " " << age << endl;
	}

	string name;
	int age;
};

class YhLight
{
public:
	// 如果需要设定默认值，则需要显示创建对象
	YhLight(const string& name = "yinghuolight", const int& age = 18, const Shuiyang& shuiyang = Shuiyang()) : name(name), age(age), shuiyang(shuiyang) {};

	void showInfo()
	{
		cout << name << " " << age << endl;
		cout << shuiyang.name << " " << shuiyang.age << endl;
	}

private:
	string name;
	int age;
	Shuiyang shuiyang;
};

int main()
{
	YhLight yhlight;
	yhlight.showInfo();
	return 0;
}
```

#### 静态成员变量
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	string name = "yinghuolight";  // 成员变量允许初始化
	// 成员变量与对象有关，对象各享一份成员变量的数据，不互通

	static int id;  // static int id = 1004;  // 静态成员变量不允许初始化
	// 静态成员变量与对象无关，使用类名访问，对象共享一份数据
};

int YhLight::id = 1004;  // 在全局环境下初始化静态成员变量
// 全局环境初始化静态成员变量能够让程序正式运行之前静态变量就已经存在并初始化
// 全局环境初始化静态成员变量有利于统一静态变量初始化的位置

int main()
{
	YhLight yhlight;
	YhLight yhlight2;

	yhlight.name = "1145";
	yhlight2.name = "19810";
	cout << "yhlight " << yhlight.name << " " << "yhlight2 " << yhlight2.name << endl;

	cout << endl;

	cout << YhLight::id << endl;  // 使用类名访问静态成员变量
	yhlight.id = 1145;
	yhlight2.id = 19810;
	cout << YhLight::id << " " << "yhlight " << yhlight.id << " " << "yhlight2 " << yhlight2.id << endl;
	return 0;
}
```

#### 静态成员函数
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	static void show()  // 静态成员函数
	{
		// cout << str << endl;
		cout << static_str << endl;  // 静态成员函数只能访问静态成员变量
	}

	string str;
	static string static_str;
};

string YhLight::static_str = "静态成员变量";  // 静态变量不会进行默认初始化，需要手动初始化

int main()
{
	YhLight::show();
	return 0;
}
```

#### 默认初始化
```cpp
#include <iostream>
using namespace std;

class Shuiyang
{
private:
	string name;
	int age;
};

class YhLight
{
public:
	string name;
	int age;
	Shuiyang shuiyang;
	static int num_static;
};

int main()
{
	YhLight yhlight;  // 对象使用空参构造器默认初始化

	// 成员变量不默认初始化，使用前必须初始化
	// cout << yhlight.name << endl;
	// cout << yhlight.age << endl;
	// 
	// yhlight.shuiyang  // 如果成员变量是对象，不会使用空参构造器默认初始化，使用前必须初始化

	// 静态成员变量不默认初始化，使用前必须初始化
	// cout << yhlight.num_static << endl;
	return 0;
}
```

#### 成员访问操作符
##### 类
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name, const int& age) : m_name(name), m_age(age) {};

	void setName(const string& name)
	{
		m_name = name;
	}

	string getName()
	{
		return m_name;
	}

	void setAge(const int& age)
	{
		m_age = age;
	}

	int getAge()
	{
		return m_age;
	}

	void show()
	{
		cout << m_name << " " << m_age << endl;
	}

private:
	string m_name;
	int m_age;
};

int main()
{
	YhLight* yhlight = new YhLight("yinghuolight", 18);
	// 常规访问
	(*yhlight).show();

	cout << endl;

	// 成员访问操作符
	yhlight->show();
	yhlight->setName("荧火light");
	yhlight->setAge(24);
	yhlight->show();

	delete yhlight;
	return 0;
}
```

##### 结构体
```cpp
#include <iostream>
using namespace std;

struct YhLight
{
	string name;
	int age;
};

int main()
{
	struct YhLight* yhlight = new YhLight();
	(*yhlight).name = "yinghuolight";
	(*yhlight).age = 18;
	cout << (*yhlight).name << " " << (*yhlight).age << endl;

	cout << endl;

	yhlight->name = "荧火light";
	yhlight->age = 24;
	cout << yhlight->name << " " << yhlight->age << endl;

	delete yhlight;
	return 0;
}
```

#### this指针
```cpp
#include <iostream>
using namespace std;

class YhLight
{
	// this指针是类内部的隐藏的成员变量，指向访问成员变量或调用成员函数的对象

public:
	YhLight(const string& name, const int& age)
	{
		this->name = name;
		this->age = age;
	}

	// 验证this指针是类内部的隐藏的成员变量，指向访问成员变量或调用成员函数的对象
	void compareAddress(const YhLight& yhlight)
	{
		cout << &yhlight << endl;  // 对引用取地址，拿到指向的内存地址
		cout << this << endl;  // this本质是指针，输出指针将拿到指向的内存地址
	}

private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight("荧火light", 18);
	yhlight.compareAddress(yhlight);
	return 0;
}
```

#### 常函数与常对象
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name) : name(name) {};

	void func()
	{
		name = "普通成员函数";
		cout << name << endl;
	}

	void constFunc() const  // 常函数，常函数内部无法修改成员变量的值，形参不受影响
	{
		// name = "常函数";
		cout << name << endl;
	}

	string name;
};

int main()
{
	YhLight yhlight("测试");
	yhlight.func();
	yhlight.constFunc();

	const YhLight yhlight2("测试");  // 常对象
	yhlight2.constFunc();  // 常对象只能调用常函数
	return 0;
}
```

#### 友元
##### 友元全局函数
```cpp
#include <iostream>
using namespace std;

// 友元是C++中的一种重要特征
// 它允许无访问权限的类或函数访问私有权限的成员变量或成员函数

class YhLight
{
	friend void test(YhLight& yhlight);  // 声明此函数为友元函数

public:
	YhLight(const string& name, const int& age) : name(name), age(age) {};

private:
	string name;
	int age;
};

// 友元全局函数
void test(YhLight& yhlight)
{
	yhlight.name = "HelloWorld";
	cout << yhlight.name << " " << yhlight.age << endl;
}

int main()
{
	YhLight yhlight("荧火light", 18);
	test(yhlight);
	return 0;
}
```

##### 友元成员函数
```cpp
#include <iostream>
using namespace std;

class YhLight;  // 向前声明，告诉Shuiyang，YhLight已经存在

class Shuiyang
{
public:
	void test(const YhLight& yhlight);  // YhLight类实际尚未定义，需要向后定义
};

class YhLight
{
	friend void Shuiyang::test(const YhLight& yhlight);

public:
	YhLight(const string& name, const int& age) : name(name), age(age) {};

private:
	string name;
	int age;
};

void Shuiyang::test(const YhLight& yhlight)  // YhLight类已经定义，能够访问
{
	cout << yhlight.name << " " << yhlight.age << endl;
}

int main()
{
	YhLight yhlight("荧火light", 18);
	Shuiyang shuiyang;
	shuiyang.test(yhlight);
	return 0;
}
```

##### 友元类
```cpp
#include <iostream>
using namespace std;

class Shuiyang;  // 向前声明

class YhLight
{
	friend class Shuiyang;  // 友元类

public:
	YhLight(const string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

class Shuiyang  // 友元类内部所有成员变量或成员函数皆能访问YhLight类
{
public:
	Shuiyang(const string& name, const int& age) : yhlight{ name,age } {};

	void showInfoYhLight()
	{
		cout << yhlight.name << " " << yhlight.age << endl;
	}

	YhLight yhlight;
};

int main()
{
	Shuiyang shuiyang("yinghuolight", 24);
	shuiyang.showInfoYhLight();
	return 0;
}
```

##### 友元成员函数向前声明顺序
```cpp
#include <iostream>
using namespace std;

// 声明需要访问的类  ->  声明友元成员函数  ->  定义需要访问的类  -> 定义友元成员函数

class YhLight;  // 声明需要访问的类

class Shuiyang
{
public:
	void test(const YhLight& yhlight);  // 声明友元成员函数
};

class YhLight  // 定义需要访问的类
{
	friend void Shuiyang::test(const YhLight& yhlight);
};

void Shuiyang::test(const YhLight& yhlight)  // 定义友元成员函数
{

}

int main()
{
	return 0;
}
```

##### 友元类向前声明顺序
```cpp
#include <iostream>
using namespace std;

// 声明友元类  ->  定义需要访问的类  ->  定义友元类

class Shuiyang;  // 声明友元类

class YhLight  // 定义需要访问的类
{
	friend class Shuiyang;
};

class Shuiyang  // 定义友元类
{

};

int main()
{
	return 0;
}
```

#### 运算符重载
##### 重载+
```cpp
#include <iostream>
using namespace std;

class YhLight
{
	// friend YhLight operator+(const YhLight& yhlight1, const YhLight& yhligh2);
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	YhLight operator+(const YhLight& yhlight)  // 成员函数
	{
		YhLight temp;
		temp.name = name + yhlight.name;
		temp.age = age + yhlight.age;
		return temp;
	}

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

// 全局函数
// YhLight operator+(const YhLight& yhlight1, const YhLight& yhligh2)
// {
//	 YhLight temp;
//	 temp.name = yhlight1.name + yhligh2.name;
//	 temp.age = yhlight1.age + yhligh2.age;
//	 return temp;
// }

int main()
{
	YhLight yhlight("荧火light", 18);
	YhLight shuiyang("没睡醒的扬", 24);

	YhLight yhsh = yhlight + shuiyang;
	yhsh.show();
	return 0;
}
```

##### 重载<<
```cpp
#include <iostream>
using namespace std;

class YhLight
{
	friend ostream& operator<<(ostream& os, const YhLight& yhlight);
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

ostream& operator<<(ostream& os, const YhLight& yhlight)
{
	os << yhlight.name << " " << yhlight.age << endl;
	return os;
}

int main()
{
	YhLight yhlight("荧火light", 18);
	cout << yhlight << endl;
	return 0;
}
```

##### 重载前置++
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	// 前置++的特征是先自增再使用
	YhLight& operator++()  // 前置++
	{
		name += name;
		age++;
		return *this;
	}

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight("荧火light", 18);
	++yhlight;
	yhlight.show();
	return 0;
}
```

##### 重载后置++
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	// 后置++是先使用再自增
	// 这意味着我们需要先返回再操作成员变量的值，显然，这是做不到的
	YhLight operator++(int)  // 后置++，使用占位函数区分
	{
		YhLight temp = *this;
		name += name;
		age++;
		return temp;
	}

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight("荧火light", 18);
	yhlight++;
	yhlight.show();
	return 0;
}
```

##### 重载=
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age, const int& test) : name(name), age(age), test(new int(test)) {};

	~YhLight()
	{
		if (test != NULL)
		{
			delete test;
			test = NULL;
		}
	}

	YhLight& operator=(const YhLight& yhlight)
	{
		if (this == &yhlight)
			return *this;

		name = yhlight.name;
		age = yhlight.age;

		if (test != NULL)
		{
			delete test;
			test = NULL;
		}
		test = new int(*yhlight.test);

		return *this;
	}

	void show()
	{
		cout << name << " " << age << " " << *test << endl;
	}

private:
	string name;
	int age;
	int* test;
};

int main()
{
	YhLight yhlight("荧火light", 18, 114514);
	YhLight yhlight2("荧火light", 14, 19810);
	yhlight = yhlight2;
	yhlight.show();
	return 0;
}
```

##### 重载==与!=
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	bool operator==(const YhLight& yhlight)
	{
		return name == yhlight.name && age == yhlight.age;
	}

	bool operator!=(const YhLight& yhlight)
	{
		return !(name == yhlight.name && age == yhlight.age);
	}

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight("荧火light", 18);
	YhLight yhlight2("荧火light", 18);
	cout << (yhlight == yhlight2) << endl;
	return 0;
}
```

##### 重载()
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	void operator()()
	{
		cout << name << " " << age << endl;
	}

	void operator()(const YhLight& yhlight)
	{
		cout << yhlight.name << " " << yhlight.age << endl;
	}

private:
	string name;
	int age;
};

int main()
{
	YhLight yhlight("荧火light", 18);
	yhlight();

	YhLight yhlight2("yinghuolight", 24);
	yhlight(yhlight2);
	return 0;
}
```

#### 继承
##### 继承的基本语法
```cpp
#include <iostream>
using namespace std;

class YhLight
{

};

// 继承所有public和protected权限的成员变量与成员函数，继承的成员变量与成员函数原权限不变
class Shuiyang :public YhLight
{

};

// 继承所有public和protected权限的成员变量与成员函数，继承的成员变量与成员函数的权限变更为protected
class Shuiyang2 :protected YhLight
{

};

// 继承所有public和protected权限的成员变量与成员函数，继承的成员变量与成员函数的权限变更为private
class Shuiyang3 :private YhLight
{

};

int main()
{
	return 0;
}
```

##### 继承匿藏
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	int public_test;

private:
	int private_test;
};

class Shuiyang : public YhLight
{
	void show()
	{
		cout << public_test << " " << private_test << endl;
	}
public:
};

int main()
{
	// 子类会继承父类所有的成员，包括private权限的成员变量与成员函数
	// private权限的成员变量与成员函数将被匿藏，子类无法访问
	cout << sizeof(Shuiyang) << endl;  // 8
	return 0;
}
```

##### 继承与构造、析构函数
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		cout << name << " " << age << endl;
	}

private:
	string name;
	int age;
};

class Shuiyang : public YhLight
{
public:
	// 子类不会继承父类的构造函数与析构函数，需要手动调用父类的构造函数进行初始化
	// 析构函数无法手动调用
	Shuiyang(const string& name, const int& age) : YhLight(name, age) {};
};

int main()
{
	Shuiyang shuiyang("没睡醒的扬", 18);
	shuiyang.show();
	return 0;
}
```

##### 构造、析构调用时机
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name, const int& age) : name(new string(name)), age(new int(age))
	{
		cout << "调用父类构造函数" << endl;
	};

	~YhLight()
	{
		if (name != NULL)
		{
			delete name;
			name = NULL;
		}

		if (age != NULL)
		{
			delete age;
			age = NULL;
		}

		cout << "调用父类析构函数" << endl;
	}

	void show()
	{
		cout << *name << " " << *age << endl;
	}

private:
	string* name;
	int* age;
};

class Shuiyang : public YhLight
{
public:
	Shuiyang(const string& name, const int& age) : YhLight(name, age)
	{
		cout << "调用子类构造函数" << endl;
	};

	~Shuiyang()
	{
		cout << "调用子类析构函数" << endl;
	}
};

int main()
{
	Shuiyang shuiyang("没睡醒的扬", 18);
	// 调用父类构造函数  ->  调用子类构造函数  ->  调用子类析构函数  ->  调用父类析构函数
	// 为了确保子类的完整性和正确性，子类在创建对象时，需要调用父类的构造器对其父类的成员变量进行初始化
	return 0;
}
```

##### 同名成员
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight() {};

	YhLight(const string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		cout << "父类 " << name << " " << age << endl;
	}

	string name;
	int age;
};

class Shuiyang : public YhLight
{
public:
	Shuiyang() {};

	Shuiyang(const string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		cout << "子类 " << name << " " << age << endl;
	}

	string name;
	int age;
};

int main()
{
	Shuiyang shuiyang("yinghuolight", 18);
	cout << shuiyang.name << endl;
	cout << shuiyang.age << endl;
	shuiyang.show();

	// 如果子类存在与父类同名的成员变量或成员函数，则子类的成员变量与成员函数优先
	cout << shuiyang.YhLight::name << endl;
	cout << shuiyang.YhLight::age << endl;
	shuiyang.YhLight::show();
	return 0;
}
```

##### 多继承与棱形继承
```cpp
#include <iostream>
using namespace std;

// C++允许一个类继承多个类
// 多继承可能带来棱形继承问题

// 棱形继承
//    类
// 类1   类2
//    类

// 棱形继承问题的本质是子类无法辨识所需访问的成员变量或成员函数来自哪一个类
// 除此之外，棱形继承会提供多份重复的数据，造成了不必要的内存占用
// 以上问题将在多态篇章给出解决方法

class YhLight
{
public:
	void show()
	{
		cout << test << endl;
	}

	int test;
};

class YhLight2 : public YhLight
{

};
class YhLight3 : public YhLight
{

};

class Shuiyang : public YhLight2, public YhLight3  // 多继承
{

};

int main()
{
	Shuiyang shuiyang;
	// shuiyang.test;  // 无法确认需要访问哪一个类中的test
	// shuiyang.show();

	shuiyang.YhLight2::test = 114514;
	shuiyang.YhLight3::test = 19810;
	shuiyang.YhLight2::show();
	shuiyang.YhLight3::show();
	return 0;
}
```

#### 多态
##### 成员函数的重写与多态的实现
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	virtual void show()  // 使用virtual声明成员函数为虚函数
	{
		cout << "荧火光" << endl;
	}
};

class Shuiyang : public YhLight
{
public:
	void show()  // 重写父类中的show()方法
	{
		cout << "没睡醒的扬" << endl;
	}
};

int main()
{
	// 成员函数的重写是C++多态中的重要特征，在C++中，子类重新实现父类中的成员函数的操作称作重写，重写的前提是成员函数是虚函数
	// 多态是C++面向对象中最重要的特征，多态允许程序使用父类对象调用子类中重写的成员函数，避免了需要创建多个子类的烦恼
	// 实现多态的前提有  1.存在继承关系  2.子类重写父类中的虚函数  3.父类指针 / 引用指向子类对象

	YhLight* yhlight = new Shuiyang();
	yhlight->show();  // 使用父类对象调用子类中重写的成员函数
	delete yhlight;
	return 0;
}
```

##### 多态的概念与分类
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	virtual void show()
	{
		cout << "荧火光" << endl;
	}
};

class Shuiyang : public YhLight
{
public:
	void show()
	{
		cout << "没睡醒的扬" << endl;
	}
};

int main()
{
	// 多态分为静态多态与动态多态

	// 对于静态多态来说，多态指的是同一事物的不同形态
	// 静态多态主要体现在函数的重载与运算符重载
	// 静态多态在编译阶段时就已经确定程序运行时需要调用哪一个形态的函数

	// 对于动态多态来说，多态指的是变量编译阶段类型与运行阶段类型不一致
	// 动态多态主要体现在父类对象调用子类重写的成员函数
	// 动态多态需要在运行阶段根据实际执行的类型选择调用哪一个类型中的函数

	YhLight* yhlight = new Shuiyang();
	yhlight->show();
	delete yhlight;
	return 0;
}
```

##### override与final
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	virtual void show()
	{
		cout << "荧火光" << endl;
	}
};

class Shuiyang : public YhLight
{
public:
	// override用于检查子类是否重写了父类中的成员函数
	// final用于禁止子类重写此函数，通常与override一起使用
	void show() override final
	{
		cout << "没睡醒的扬" << endl;
	}
};

int main()
{
	YhLight* yhlight = new Shuiyang();
	yhlight->show();
	delete yhlight;
	return 0;
}
```

##### 多态案例-计算器类
```cpp
#include <iostream>
using namespace std;

// 普通实现
class Calculator
{
public:
	int m_num1;
	int m_num2;

	int getResult(const string& oper)
	{
		if (oper == "+")
		{
			return m_num1 + m_num2;
		}
		else if (oper == "-")
		{
			return m_num1 - m_num2;
		}
		else if (oper == "*")
		{
			return m_num1 * m_num2;
		}
		else if (oper == "/")
		{
			return m_num1 / m_num2;
		}
		// 违背开闭原则 -> 类应该对扩展开放但对修改关闭
		else
		{
			cout << "无此操作符或输入错误" << endl;
		}
	}
};

// 多态实现计算器
// 计算器的基类
class CalculatorBase
{
public:
	int m_num1;
	int m_num2;

	virtual int getResult()
	{
		return 0;
	}
};

// 加法计算器类
class AddCalculator : public CalculatorBase
{
	int getResult() override
	{
		return m_num1 + m_num2;
	}
};

// 减法计算器类
class SubCalculator : public CalculatorBase
{
	int getResult() override
	{
		return m_num1 - m_num2;
	}
};

// 乘法计算器类
class MulCalculator : public CalculatorBase
{
	int getResult() override
	{
		return m_num1 * m_num2;
	}
};

// 除法计算器类
class DivCalculator :public CalculatorBase
{
	int getResult() override
	{
		return m_num1 / m_num2;
	}
};

int main()
{
	Calculator calculator;
	calculator.m_num1 = 10;
	calculator.m_num2 = 20;
	cout << calculator.getResult("+") << endl;
	cout << calculator.getResult("-") << endl;
	cout << calculator.getResult("*") << endl;
	cout << calculator.getResult("/") << endl;

	cout << endl;

	// 多态
	CalculatorBase* calculatorBase = new AddCalculator();
	calculatorBase->m_num1 = 10;
	calculatorBase->m_num2 = 20;
	cout << calculatorBase->getResult() << endl;
	delete calculatorBase;
	return 0;
}
```

##### 纯虚函数与抽象类
```cpp
#include <iostream>
using namespace std;

class CalculatorBase
{
public:
	int m_num1;
	int m_num2;

	virtual int getResult() = 0;  // 纯虚函数
	// 当一个类存在纯虚函数时，这个类被称为抽象类
	// 抽象类无法实例化，且子类必须重写纯虚函数，除非同样作为抽象类
};

class AddCalculator : public CalculatorBase
{
	int getResult() override
	{
		return m_num1 + m_num2;
	}
};

int main()
{
	CalculatorBase* calculatorBase = new AddCalculator();
	calculatorBase->m_num1 = 10;
	calculatorBase->m_num2 = 20;
	cout << calculatorBase->getResult() << endl;
	delete calculatorBase;
	return 0;
}
```

##### 虚继承与虚基类
```cpp
#include <iostream>
using namespace std;

// 虚继承是C++为了解决棱形继承中子类访问成员不明确
// 以及棱形继承会提供多份重复数据，造成不必要的资源浪费而引进的特征

// 虚继承继承的父类称为虚基类，继承虚基类的子类将共享数据，确保数据唯一

class YhLight  // 虚基类
{
public:
	void show()
	{
		cout << test << endl;
	}

	int test;
};

class YhLight2 : virtual public YhLight  // 虚继承
{

};
class YhLight3 : virtual public YhLight
{

};

class Shuiyang : public YhLight2, public YhLight3
{

};

int main()
{
	// 继承虚基类的子类将共享数据，确保数据唯一
	Shuiyang shuiyang;
	shuiyang.test = 1145;
	shuiyang.show();

	shuiyang.YhLight2::test = 114514;
	cout << shuiyang.YhLight2::test << endl;
	shuiyang.YhLight3::test = 19810;
	cout << shuiyang.YhLight2::test << endl;
	return 0;
}
```

##### 虚析构
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	virtual ~YhLight()  // 虚析构
	{
		cout << "YhLight析构" << endl;
	}
};

class Shuiyang : public YhLight
{
public:
	~Shuiyang()
	{
		cout << "Shuiyang析构" << endl;
	}
};

int main()
{
	// 虚析构旨在让使用多态的父类对象在销毁时调用子类的析构函数，确保子类中分配的资源能够被正确释放
	YhLight* yhlight = new Shuiyang();
	delete yhlight;
	return 0;
}
```

##### 纯虚析构
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	virtual ~YhLight() = 0;
};

YhLight::~YhLight()
{
	cout << "YhLight纯虚析构" << endl;
}

class Shuiyang : public YhLight
{
public:
	~Shuiyang()
	{
		cout << "Shuiyang析构" << endl;
	}
};

int main()
{
	YhLight* yhlight = new Shuiyang();
	delete yhlight;
	return 0;
}
```

#### 继承与多态的深度剖析
```cpp
#include <iostream>

class YhLight
{
public:
	void show()
	{
		std::cout << "父类" << std::endl;
	}
};

class Shuiyang : public YhLight {
public:
	void to_print()
	{
		std::cout << "子类" << std::endl;
	}
};

int main()
{
	// C++继承与多态的底层剖析
	// 假设父类为YhLight，子类为Shuiyang

	// 类被编译器编译后，编译器会根据类的结构在内存中分配一块内存空间
	// 这块内存空间内部被划分为多个区域，形成特殊的结构 / 布局
	// 这块内存空间被称为内存布局，内存布局存储着这个类的所有数据
	// 
	// 除了类本身具有内存布局外，类的对象也具有内存布局
	// 每一个类对象都拥有专属的内存布局，通常情况下，类对象的内存布局与类的内存布局相同
	// 如果一个类存在继承关系，类对象的内存布局将有所不同
	// 子类对象的内存布局除了包括本类的内存布局外，还将包括父类的内存布局
	// YhLight对象的内存布局  ->  [YhLight]
	// Shuiyang对象的内存布局  ->  [YhLight][Shuiyang]
	// 这意味着子类对象包含了一份父类的数据，同时包含了一份子类的数据，子类以此能够访问父类的数据
	// 这就是C++的继承机制

	// 然而，C++的继承机制并不是简单的数据复制，而是为了将多块内存区域组合在一起
	// 为实现通过一个基类对象来访问多个类的数据搭建了桥梁，实现互通效果
	// 在没有继承关系时，Shuiyang对象指向了Shuiyang的起始地址
	// 在继承关系时，Shuiyang对象指向了YhLight的起始地址
	// 编译器只需要修改指针的偏移量就能够访问父类与本身的数据
	// 但这也带来了一个问题，连续的内存区域，意味着父类与子类能够随意访问彼此的数据，且不容易带来安全问题
	// 父类与子类之间没有明确的边界关系
	// 为了解决此问题，C++引入了严格的类型检查，权限修饰符，父类数据隐藏机制
	// 严格的类型检查限制了父类访问子类
	// 权限修饰符与父类数据隐藏则限制了子类随意访问父类的数据
	// 但又引入了虚函数(vfunc)，虚表指针(vptr)，虚函数表(vtable)等机制来允许父类与子类之间相互访问

	// 虚函数(vfunc)是一种特殊的成员函数，虚函数表(vtable)用于存储虚函数的地址，虚表指针(vptr)则用于指向虚函数表
	// 当类中存在虚函数时，编译器会为类添加虚表指针与虚函数表
	// 常规的函数的内存地址在调用之前便已经确定，而虚函数的内存地址在调用时才会确定
	// 当存在继承关系时，子类继承了父类的虚函数，编译器会为子类添加虚表指针与虚函数表
	// 新添加的虚函数表将先存储父类的虚函数，再存储子类的虚函数(内存布局)，如果子类中出现同名函数，即发生重写
	// 新添加的虚函数表将替换父类的虚函数地址为子类的重写的函数的地址

	// YhLight* yhlight = new Shuiyang();
	// 当父类指针指向子类时，缘于严格的类型检查，父类指针只允许访问子类对象内存布局中的父类内存布局
	// 当父类指针调用本类中的虚函数时，缘于虚函数的延迟绑定地址与虚函数表机制
	// 父类指针能够通过虚函数表中存储的地址调用子类重写的函数
	// 这就是C++的多态机制

	// 父类指针调用子类函数
	// 不建议直接使用强制类型转换进行转换
	// 建议使用dynamic_cast / static_cast进行转换
	YhLight* yhlight = new Shuiyang();
	Shuiyang* shuiyang = (Shuiyang*)yhlight;
	shuiyang->to_print();
	// 原理剖析
	// 父类指针指向子类对象，子类对象内存布局中包含父类内存布局
	// 进行强制类型转换后，父类指针指向子类对象内存布局中的子类内存布局
	return 0;
}
```

### 文件读写
#### 写入文件
##### ios::out
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	// 在计算机科学中，数据的传输有序连续且具有方向性，形似流动的水，于是将其数据的传输抽象成流
	// 当文件，程序或设备接收数据时，我们把此过程称为输入流，反之，则称为输出流

	// C++官方库提供了一系列的类来操作文件

	// ofstream用于向文件写入数据
	ofstream ofs;  // 创建输出流对象
	ofs.open("yhlight.ini", ios::out);  // 使用open()函数打开需要写入数据的文件，如果文件不存在，则创建文件
	// 所创建的文件默认在项目文件夹中
	// ios::out 为写文件而打开文件，如果文件中存在内容，则清空内容后再写入数据
	ofs << "Luminous Pursuit" << endl;  // 输出字符串到文件中
	ofs.close();  // 关闭输出流，防止内存泄露
	return 0;
}
```

##### ios::app
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ofstream ofs;
	ofs.open("yhlight.ini", ios::out | ios::app);  // 使用 | 搭配多种打开方式
	// ios::app 追加内容到文件中
	ofs << "Luminous Pursuit" << endl;
	ofs.close();
	return 0;
}
```

##### ios::ate
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ofstream ofs;
	ofs.open("yhlight.ini", ios::out | ios::ate);
	// ios::ate 打开文件并定位至文件末尾
	ofs << "Luminous Pursuit" << endl;
	ofs.close();
	return 0;
}
```

##### ios::trunc
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ofstream ofs;
	ofs.open("yhlight.ini", ios::out | ios::trunc);
	// ios::trunc 如果文件已经存在，则先删除文件
	ofs << "Luminous Pursuit" << endl;
	ofs.close();
	return 0;
}
```

#### 读取文件
##### ios::in
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;  // 创建输入流对象
	ifs.open("yhlight.ini", ios::in);
	// ios::in 为读文件而打开文件

	if (!ifs.is_open())  // 判断是否成功打开文件
	{
		return 0;
	}
	ifs.close();  // 关闭输入流
	return 0;
}
```

##### 读取数据的方式
###### 逐单词读取
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;
	ifs.open("yhlight.ini", ios::in);

	if (!ifs.is_open())
	{
		return 0;
	}

	char buffer[1024] = { 0 };
	while (ifs >> buffer)
	{
		cout << buffer << endl;  // 输出内容到控制台
	}
	// 逐单词读取文件内容，以空格为分隔
	// 无法读取包含空格的字符串，无法读取过长的内容

	ifs.close();
	return 0;
}
```

###### 逐行读取
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;
	ifs.open("yhlight.ini", ios::in);

	if (!ifs.is_open())
	{
		return 0;
	}

	char buffer[1024] = { 0 };
	while (ifs.getline(buffer, sizeof(buffer)))
	{
		cout << buffer << endl;
	}
	// 逐行读取
	// 如果内容超出buffer范围，则会破坏原有结构

	ifs.close();
	return 0;
}
```

###### 以字符串形式读取
```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
	ifstream ifs;
	ifs.open("yhlight.ini", ios::in);

	if (!ifs.is_open())
	{
		return 0;
	}

	string buffer = "";
	while (getline(ifs, buffer))  // 需要包括string头文件
	{
		cout << buffer << endl;
	}
	// 以字符串形式读取
	// 如果文件非常大，会占用过多内存

	ifs.close();
	return 0;
}
```

###### 逐字符读取
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;
	ifs.open("yhlight.ini", ios::in);

	if (!ifs.is_open())
	{
		return 0;
	}

	char ch = 0;
	while ((ch = ifs.get()) != EOF)  // EOF是文件结尾的结束标志
	{
		cout << ch;
	}
	// 逐字符读取
	// 效率较低

	ifs.close();
	return 0;
}
```

#### 二进制文件
##### 写入文件
```cpp
#include <iostream>
#include <fstream>
using namespace std;

// 常规的C++文件读写方式适用于读写人类可阅读的文本文件
// 但不适用于直接存入数据的二进制文件，或者是一些无法以文本方式阅读的文件，例如图片，音频，视频，应用程序等
// 我们要以二进制的方式读写这些文件

class YhLight
{
public:
	char m_name[64];  // 写二进制文件不要使用C++的string，string可能会导致数据不一致，改用字符数组
	int m_age;
};

int main()
{
	ofstream ofs("yinghuolight.txt", ios::out | ios::binary);  // 也可以使用open()函数
	// ios::binary 以二进制方式打开文件

	YhLight yhlight = { "yinghuolight", 18 };
	ofs.write((const char*)&yhlight, sizeof(YhLight));
	// wirte()函数第一个参数需要填入const char*类型的指针，表示输出内容的起始地址
	// 第二个参数控制一次输出的字节数
	ofs.close();
	return 0;
}
```

##### 读取文件
```cpp
#include <iostream>
#include <fstream>
using namespace std;

class YhLight
{
public:
	char m_name[64];
	int m_age;
};

int main()
{
	ifstream ifs("yinghuolight.txt", ios::in | ios::binary);

	YhLight yhlight;
	if (!ifs.is_open())
	{
		return 0;
	}

	ifs.read((char*)&yhlight, sizeof(YhLight));
	// read()函数第一个参数需要填入char*类型的指针，表示读取的起始地址
	// 第二个参数控制一次输入的字节数
	// read()函数可以作为循环的判断条件，当read()函数读取失败或文件到达末尾时，循环终止
	// 然而，read()函数只有读取的字节数满足一次输入的字节数时，才返回true，反之，则为false -> (read()函数返回值并不是bool类型，不要误解，只是形象一下)
	// 如果使用read()函数作为循环终止条件，需要额外输出一次数据，避免数据输出不完全
	cout << "姓名: " << yhlight.m_name << endl;

	ifs.close();
	return 0;
}
```

#### 常用函数
##### gcount()
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;
	ifs.open("yhlight.ini", ios::in | ios::binary);

	if (!ifs.is_open())
	{
		return 0;
	}

	char buffer[1024] = { 0 };
	while (ifs.read(buffer, sizeof(buffer)))
	{
		cout << ifs.gcount() << endl;  // gcount()函数用于获取上一次读取的字节数，仅适用于二进制文件读取
	}
	ifs.close();
	return 0;
}
```

#### 文件读写实践
##### 文件拷贝
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;
	ofstream ofs;

	ifs.open("心灵终结3.3.6中文整合包.exe", ios::in | ios::binary);
	if (!ifs.is_open())
		return 0;

	ofs.open("copy.exe", ios::out | ios::trunc | ios::binary);

	char buffer[4096] = { 0 };  // 1MB = 1024字节
	while (ifs.read(buffer, sizeof(buffer)))
	{
		ofs.write(buffer, ifs.gcount());
	}

	if (ifs.gcount() > 0)  // 确保文件末尾的数据能被正确输出
	{
		ofs.write(buffer, ifs.gcount());
	}

	ifs.close();
	ofs.close();
	return 0;
}
```

##### 计算文件大小
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream ifs;

	ifs.open("心灵终结3.3.6中文整合包.exe", ios::in | ios::binary);

	if (!ifs.is_open())
	{
		return 0;
	}

	char buffer[1024] = { 0 };
	long long len = 0;  // 统计读取的字节数

	while (ifs.read(buffer, sizeof(buffer)))
	{
		len += ifs.gcount();
	}

	if (ifs.gcount() > 0)
	{
		len += ifs.gcount();
	}
	cout << "此文件大小为" << len << "字节" << endl;

	ifs.close();
	return 0;
}
```

### 模板
#### 函数模板
```cpp
#include <iostream>
using namespace std;

template<typename T>  // 参数化类型T
void my_swap(T& a, T& b)  // 函数模板
{
	T temp = a;
	a = b;
	b = temp;
}

int main()
{
	// 模板是C++中与面向对象并列的强大特征，模板采用参数化编程的方式来实现代码的复用
	// 模板分为函数模板和类模板
	// 包含参数化类型的函数称为函数模板

	int a = 20;
	int b = 40;
	cout << a << " " << b << endl;
	my_swap<int>(a, b);  // 调用函数模板，使用<>指定类型
	cout << a << " " << b << endl;

	double x = 100.0;
	double y = 50.0;
	cout << x << " " << y << endl;
	my_swap<double>(x, y);  // 调用函数模板，使用<>指定类型
	cout << x << " " << y << endl;
	return 0;
}
```

##### 自动类型推断
```cpp
#include <iostream>
using namespace std;

template<typename T>
T sum(const T& t1, const T& t2)
{
	return t1 + t2;
}

int main()
{
	int num = 10;
	int num2 = 20;
	int result = sum(num, num2);  // 自动类型推断，当形参列表的数据类型一致时，编译器会自动推断出模板参数的类型
	cout << result << endl;
	return 0;
}
```

##### 函数模板重载
```cpp
#include <iostream>
using namespace std;

template<typename T>
T sum(const T& t1, const T& t2)
{
	return t1 + t2;
}

template<typename T>  // 函数模板重载
T sum(const T& t1, const T& t2, const T& t3)
{
	return t1 + t2 + t3;
}

int main()
{
	int num = 20;
	int num2 = 30;
	int result = sum<int>(num, num2);
	cout << result << endl;

	cout << endl;

	int num3 = 10;
	int result2 = sum<int>(num, num2, num3);
	cout << result2 << endl;
	return 0;
}
```

##### 普通函数与函数模板调用规则
```cpp
#include <iostream>
using namespace std;

void my_swap(int& a, int& b)
{
	int temp = a;
	a = b;
	b = temp;
	cout << "普通函数" << endl;
}

template<typename T>
void my_swap(T& a, T& b)
{
	T temp = a;
	a = b;
	b = temp;
	cout << "模板函数" << endl;
}

int main()
{
	int num = 10;
	int num2 = 20;
	my_swap(num, num2);  // 优先调用普通函数
	cout << num << " " << num2 << endl;
	return 0;
}
```

##### 模板具体化
```cpp
#include <iostream>
using namespace std;

class YhLight
{
public:
	YhLight(const string& name, const int& age)
	{
		this->name = name;
		this->age = age;
	}

	string name;
	int age;
};

template<typename T>
void compare(const T& t1, const T& t2)
{
	if (t1 > t2)
	{
		cout << t1 << " > " << t2 << endl;
	}
	else if (t1 < t2)
	{
		cout << t1 << " < " << t2 << endl;
	}
	else
	{
		cout << t1 << " = " << t2 << endl;
	}
}

template<> void compare<YhLight>(const YhLight& yhlight, const YhLight& yhlight2)
{
	if ((yhlight.name > yhlight2.name && yhlight.age > yhlight2.age) || (yhlight.name == yhlight2.name && yhlight.age > yhlight2.age) || (yhlight.name > yhlight2.name && yhlight.age == yhlight2.age))
	{
		cout << yhlight.name << " > " << yhlight2.name << endl;
	}
	else if ((yhlight.name < yhlight2.name && yhlight.age < yhlight2.age) || (yhlight.name == yhlight2.name && yhlight.age < yhlight2.age) || (yhlight.name < yhlight2.name && yhlight.age == yhlight2.age))
	{
		cout << yhlight.name << " < " << yhlight2.name << endl;
	}
	else
	{
		cout << yhlight.name << " = " << yhlight2.name << endl;
	}
}

int main()
{
	int num = 20;
	int num2 = 40;
	compare(num, num2);

	YhLight yhlight("yhlight", 18);
	YhLight yhlight2("yhlight2", 20);
	compare(yhlight, yhlight2);
	return 0;
}
```

#### 类模板
```cpp
#include <iostream>
using namespace std;

template<typename T>
class MuliplyArray
{
public:
	MuliplyArray() : size(20), index(0)
	{
		arr = new T[size];
	}

	MuliplyArray(const int& size)
	{
		this->size = size;
		arr = new T[size];
		index = 0;
	}

	~MuliplyArray()
	{
		delete[] arr;
	}

	void push_back(const T& t)
	{
		if (index == size)
		{
			int new_size = size * 2;
			T* new_arr = new T[new_size];
			for (int i = 0; i < size; i++)
			{
				new_arr[i] = arr[i];
			}
			delete[] arr;
			arr = new_arr;
			size = new_size;
		}
		arr[index++] = t;
	}

	int length() const
	{
		return index;
	}

	T get(const int& i) const
	{
		return arr[i];
	}

	T operator[](const int& i) const
	{
		return arr[i];
	}

private:
	T* arr;
	int size;
	int index;
};

int main()
{
	int num_int = 10;
	int num_int2 = 20;
	int num_int3 = 30;
	int num_int4 = 40;

	MuliplyArray<int> arr;
	arr.push_back(num_int);
	arr.push_back(num_int2);
	arr.push_back(num_int3);
	arr.push_back(num_int4);

	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr.get(i) << endl;
	}

	for (int i = 0;i < arr.length();i++)
	{
		cout << arr[i] << endl;
	}
	return 0;
}
```

##### 默认类型
```cpp
#include <iostream>
using namespace std;

template<typename T = int>  // 默认类型
class MuliplyArray
{
public:
	MuliplyArray() : size(20), index(0)
	{
		arr = new T[size];
	}

	MuliplyArray(const int& size)
	{
		this->size = size;
		arr = new T[size];
		index = 0;
	}

	~MuliplyArray()
	{
		delete[] arr;
	}

	void push_back(const T& t)
	{
		if (index == size)
		{
			int new_size = size * 2;
			T* new_arr = new T[new_size];
			for (int i = 0; i < size; i++)
			{
				new_arr[i] = arr[i];
			}
			delete[] arr;
			arr = new_arr;
			size = new_size;
		}
		arr[index++] = t;
	}

	int length() const
	{
		return index;
	}

	T get(const int& i) const
	{
		return arr[i];
	}

	T operator[](const int& i) const
	{
		return arr[i];
	}

private:
	T* arr;
	int size;
	int index;
};

int main()
{
	int num_int = 10;
	int num_int2 = 20;
	int num_int3 = 30;
	int num_int4 = 40;

	MuliplyArray<> arr;  // 默认类型为int
	arr.push_back(num_int);
	arr.push_back(num_int2);
	arr.push_back(num_int3);
	arr.push_back(num_int4);

	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr.get(i) << endl;
	}

	for (int i = 0;i < arr.length();i++)
	{
		cout << arr[i] << endl;
	}
	return 0;
}
```

##### 类模板对象作函数参数
```cpp
#include <iostream>
using namespace std;

template<typename T>
class MuliplyArray
{
public:
	MuliplyArray() : size(20), index(0)
	{
		arr = new T[size];
	}

	MuliplyArray(const int& size)
	{
		this->size = size;
		arr = new T[size];
		index = 0;
	}

	~MuliplyArray()
	{
		delete[] arr;
	}

	void push_back(const T& t)
	{
		if (index == size)
		{
			int new_size = size * 2;
			T* new_arr = new T[new_size];
			for (int i = 0; i < size; i++)
			{
				new_arr[i] = arr[i];
			}
			delete[] arr;
			arr = new_arr;
			size = new_size;
		}
		arr[index++] = t;
	}

	int length() const
	{
		return index;
	}

	T get(const int& i) const
	{
		return arr[i];
	}

	T operator[](const int& i) const
	{
		return arr[i];
	}

private:
	T* arr;
	int size;
	int index;
};

void range_muliply_array(const MuliplyArray<int>& arr)  // 模板类对象作函数参数，参数类型确认
{
	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr.get(i) << " ";
	}
	cout << "参数类型确认" << endl;
}

template<typename T>
void range_muliply_array(const MuliplyArray<T>& arr)  // 模板类对象作函数参数，参数类型不定
{
	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr.get(i) << " ";
	}
	cout << "参数类型不定" << endl;
}

template<typename T>
void range_muliply_array2(const T& arr)  // 模板类对象作函数参数，模板类对象类型不定
{
	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr.get(i) << " ";
	}
	cout << "模板类对象类型不定" << endl;
}

int main()
{
	MuliplyArray<int> muliply_array(10);
	muliply_array.push_back(10);
	muliply_array.push_back(20);
	muliply_array.push_back(30);
	muliply_array.push_back(40);
	range_muliply_array(muliply_array);

	MuliplyArray<double> muliply_array2(10);
	muliply_array2.push_back(10.0);
	muliply_array2.push_back(20.0);
	muliply_array2.push_back(30.0);
	muliply_array2.push_back(40.0);
	range_muliply_array(muliply_array2);

	cout << endl;

	range_muliply_array2(muliply_array);
	range_muliply_array2(muliply_array2);
	return 0;
}
```

##### 类模板与继承
```cpp
#include <iostream>
using namespace std;

template<typename T, typename K>
class MuliplyArray
{

};

class MuliplyArraySon : public MuliplyArray<int, int>  // 子类需要指定父类的模板参数
{

};

template<typename T>
class MuliplyArraySonSon : public MuliplyArray<T, T>  // 子类必须完整继承父类的模板参数
{

};

template<typename T, typename K>
class MuliplyArraySonSon2 : public MuliplyArray<T, K>
{

};

template<typename T, typename K, typename O>
class MuliplyArraySonSon3 : public MuliplyArray<T, K>
{

};

int main()
{
	return 0;
}
```

##### 类模板成员函数的类外实现
```cpp
#include <iostream>
using namespace std;

template<typename T>
class MuliplyArray
{
public:
	MuliplyArray();

	MuliplyArray(const int& size);

	~MuliplyArray();

	void push_back(const T& t);

	int length() const;

	T get(const int& i) const;

	T operator[](const int& i) const;

private:
	T* arr;
	int size;
	int index;
};

template<typename T>
MuliplyArray<T>::MuliplyArray() : size(20), index(0)
{
	arr = new T[size];
}

template<typename T>
MuliplyArray<T>::MuliplyArray(const int& size)
{
	this->size = size;
	arr = new T[size];
	index = 0;
}

template<typename T>
MuliplyArray<T>::~MuliplyArray()
{
	delete[] arr;
}

template<typename T>
void MuliplyArray<T>::push_back(const T& t)
{
	if (index == size)
	{
		int new_size = size * 2;
		T* new_arr = new T[new_size];
		for (int i = 0; i < size; i++)
		{
			new_arr[i] = arr[i];
		}
		delete[] arr;
		arr = new_arr;
		size = new_size;
	}
	arr[index++] = t;
}

template<typename T>
int MuliplyArray<T>::length() const
{
	return index;
}

template<typename T>
T MuliplyArray<T>::get(const int& i) const
{
	return arr[i];
}

template<typename T>
T MuliplyArray<T>::operator[](const int& i) const
{
	return arr[i];
}

int main()
{
	return 0;
}
```

##### 类模板的分文件书写
```cpp
#include <iostream>
#include "MuliplyArray.hpp"
using namespace std;

int main()
{
	MuliplyArray<int> arr(10);
	for (int i = 0; i < 10; i++)
	{
		arr.push_back(i);
	}
	for (int i = 0; i < arr.length(); i++)
	{
		cout << arr[i] << " ";
	}
	cout << endl;
	return 0;
}
```



MuliplyArray.hpp  
```cpp
#pragma once  // 防止头文件重复包含
#include <iostream>
using namespace std;

template<typename T>
class MuliplyArray
{
public:
	MuliplyArray();

	MuliplyArray(const int& size);

	~MuliplyArray();

	void push_back(const T& t);

	int length() const;

	T get(const int& i) const;

	T operator[](const int& i) const;

private:
	T* arr;
	int size;
	int index;
};

template<typename T>
MuliplyArray<T>::MuliplyArray() : size(20), index(0)
{
	arr = new T[size];
}

template<typename T>
MuliplyArray<T>::MuliplyArray(const int& size)
{
	this->size = size;
	arr = new T[size];
	index = 0;
}

template<typename T>
MuliplyArray<T>::~MuliplyArray()
{
	delete[] arr;
}

template<typename T>
void MuliplyArray<T>::push_back(const T& t)
{
	if (index == size)
	{
		int new_size = size * 2;
		T* new_arr = new T[new_size];
		for (int i = 0; i < size; i++)
		{
			new_arr[i] = arr[i];
		}
		delete[] arr;
		arr = new_arr;
		size = new_size;
	}
	arr[index++] = t;
}

template<typename T>
int MuliplyArray<T>::length() const
{
	return index;
}

template<typename T>
T MuliplyArray<T>::get(const int& i) const
{
	return arr[i];
}

template<typename T>
T MuliplyArray<T>::operator[](const int& i) const
{
	return arr[i];
}
```

##### 模板数组类
```cpp
#include <iostream>
#include "MyArray.hpp"
using namespace std;

class YhLight
{
public:
	YhLight() {}

	YhLight(const string& name, const int& age) : m_name(name), m_age(age) {}

	string getName() { return m_name; }

	int getAge() { return m_age; }

private:
	string m_name;
	int m_age;
};

int main()
{
	MyArray<int> arr = MyArray<int>(5);

	for (int i = 0;i < arr.getCapacity();i++) { arr.pushBack(i); }

	for (int i = 0;i < arr.getSize();i++) { cout << arr[i] << endl; }

	for (int i = 0;i < 2;i++) { arr.deleteBack(); }

	for (int i = 0;i < arr.getSize();i++) { cout << arr[i] << endl; }

	MyArray<YhLight> arr2(3);
	YhLight yhlight("yinghuolight", 18);
	YhLight yhlight2("睡扬", 22);
	YhLight yhlight3("幻来听", 18);
	arr2.pushBack(yhlight);
	arr2.pushBack(yhlight2);
	arr2.pushBack(yhlight3);

	for (int i = 0;i < arr2.getSize();i++)
	{
		cout << "姓名：" << arr2[i].getName() << " 年龄：" << arr2[i].getAge() << endl;
	}
	return 0;
}
```



MyArray.hpp  
```cpp
#pragma once
#include <iostream>
using namespace std;

template <typename T>
class MyArray
{
public:
	MyArray(const int& capacity) : m_capacity(capacity), m_size(0)
	{
		pAddress = new T[m_capacity];
	}

	MyArray(const MyArray& myArray)
	{
		m_capacity = myArray.m_capacity;
		m_size = myArray.m_size;
		pAddress = new T[myArray.m_capacity];
		for (int i = 0;i < m_size;i++)
		{
			pAddress[i] = myArray.pAddress[i];
		}
	}

	MyArray& operator=(const MyArray& myArray)
	{
		if (this == &myArray)
			return this;

		if (pAddress != NULL)
		{
			delete[] pAddress;
			pAddress = NULL;
			m_capacity = 0;
			m_size = 0;
		}

		m_capacity = myArray.m_capacity;
		m_size = myArray.m_size;
		pAddress = new T[myArray.m_capacity];
		for (int i = 0;i < m_size;i++)
		{
			pAddress[i] = myArray.pAddress[i];
		}
		return *this;
	}

	~MyArray()
	{
		if (pAddress != NULL)
		{
			delete[] pAddress;
			pAddress = NULL;
		}
	}

	void pushBack(const T& val)
	{
		if (m_capacity == m_size)
		{
			int new_capacity = m_capacity * 2;
			T* new_pAddress = new T[new_capacity];
			for (int i = 0; i < m_size; i++)
			{
				new_pAddress[i] = pAddress[i];
			}
			delete[] pAddress;
			pAddress = new_pAddress;
			m_capacity = new_capacity;
		}
		pAddress[m_size++] = val;
	}

	void deleteBack()
	{
		if (m_size == 0)
		{
			return;
		}
		m_size--;
	}

	T& operator[](const int& index) const
	{
		return pAddress[index];
	}

	int getCapacity() const
	{
		return m_capacity;
	}

	int getSize() const
	{
		return m_size;
	}

private:
	T* pAddress;
	int m_capacity;
	int m_size;
};
```

### STL
长久以来，软件界一直希望建立一种可重复利用的东西。C++的**面向对象**和**泛型编程**，目的都是为了提升复用性  
然而，由于不同开发者对数据结构和算法的认识与实现存在差异，导致数据结构和算法领域一直未能形成统一标准  
这使得开发者不得不反复实现自己的数据结构与算法，造成了大量的重复劳动  
为了解决这一问题，建立起数据结构和算法的标准，**STL**应运而生  

**STL（Standard Template Library，标准模板库）** 
STL从广义上分为**容器（container）**，**算法（algorithm）**和**迭代器（iterator）**，**容器**和**算法**之间通过**迭代器**进行无缝连接  
STL几乎所有的代码都采用了模板类或者模板函数，大体分为六大组件，分别是**容器**，**算法**，**迭代器**，**仿函数**，**适配器（配接器）**和**空间配置器**  

**容器**：各种数据结构(数组，链表，树，栈，队列，集合，映射表等)的实现，如vector，list，deque，set，map等，目的是用来存放数据  
**容器**分为**序列式容器**和**关联式容器**两种  
**序列式容器**强调**值**的排序，容器中的每个元素均有固定的位置  
**关联式容器**基于**二叉树**结构，各元素之间没有严格的物理上的顺序关系  

**算法**：各种常用的算法，如sort，find，copy，for_each等，算法分为**质变算法**和**非质变算法**  
**质变算法**是指运算过程中会更改区间内的元素的内容，例如拷贝、替换、删除等  
**非质变算法**是指运算过程中不会更改区间内的元素内容，例如查找，计数，遍历，寻找极值等  

**迭代器**：扮演容器与算法之间的胶合剂，提供一种方式依序寻访某个容器种所含的元素，同时无需暴露该容器的内部表示  
每个容器都有自己专属的迭代器，迭代器使用非常类似于指针，初学阶段可以先理解迭代器为指针  

迭代器种类如下表：  
| 种类           | 功能                                                     | 支持运算                                |
| -------------- | -------------------------------------------------------- | --------------------------------------- |
| 输入迭代器     | 对数据的只读访问                                         | 只读，支持++、==、！=                   |
| 输出迭代器     | 对数据的只写访问                                         | 只写，支持++                            |
| 前向迭代器     | 读写操作，并能向前推进迭代器                             | 读写，支持++、==、！=                   |
| 双向迭代器     | 读写操作，并能向前和向后操作                             | 读写，支持++、--，                      |
| 随机访问迭代器 | 读写操作，可以以跳跃的方式访问任意数据，功能最强的迭代器 | 读写，支持++、--、[n]、-n、<、<=、>、>= |
常用的容器迭代器种类为双向迭代器和随机访问迭代器  

#### 初识STL
##### vector容器存放内置数据类型
```cpp
#include <iostream>
#include <vector>
#include <algorithm>  // 算法头文件
// 取消命名空间的使用

void print(const int& value)
{
	std::cout << value << " ";
}

int main()
{
	std::vector<int> vect;  // 创建vector容器
	vect.push_back(10);  // 尾插数据
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(30);

	// 使用迭代器遍历vector容器
	// 起始迭代器，指向第一个元素
	std::vector<int>::iterator it_begin = vect.begin();
	// 结束迭代器，指向最后一个元素的下一个位置
	std::vector<int>::iterator it_end = vect.end();

	// 第一种迭代方式
	while (it_begin != it_end)
	{
		std::cout << *it_begin << " ";
		it_begin++;
	}

	std::cout << std::endl;

	// 第二种迭代方式
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}

	std::cout << std::endl;

	// 第三种迭代方式
	for_each(vect.begin(), vect.end(), print);
	return 0;
}
```

##### vector容器存放自定义数据类型
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class YhLight
{
public:
	YhLight(const std::string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

int main()
{
	YhLight yhlight = YhLight("yhlight", 18);
	YhLight yhlight2 = YhLight("yhlight2", 20);
	YhLight yhlight3 = YhLight("yhlight3", 22);
	YhLight yhlight4 = YhLight("yhlight4", 28);

	std::vector<YhLight> vect;
	vect.push_back(yhlight);
	vect.push_back(yhlight2);
	vect.push_back(yhlight3);
	vect.push_back(yhlight4);

	std::vector<YhLight>::iterator it_begin = vect.begin();
	std::vector<YhLight>::iterator it_end = vect.end();
	while (it_begin != it_end)
	{
		(*it_begin).show();
		it_begin++;
	}

	std::cout << std::endl;

	for (std::vector<YhLight>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		(*it_begin).show();
	}
	return 0;
}
```

##### 容器嵌套容器
```cpp
#include <iostream>
#include <vector>

int main()
{
	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(30);

	std::vector<int> vect2;
	vect2.push_back(45);
	vect2.push_back(236);
	vect2.push_back(135);
	vect2.push_back(2436);

	std::vector<int> vect3;
	vect3.push_back(246);
	vect3.push_back(27);
	vect3.push_back(26);
	vect3.push_back(14);

	std::vector<std::vector<int>> vvect;
	vvect.push_back(vect);
	vvect.push_back(vect2);
	vvect.push_back(vect3);

	std::vector<std::vector<int>>::iterator it_begin = vvect.begin();
	std::vector<std::vector<int>>::iterator it_end = vvect.end();

	while (it_begin != it_end)
	{
		std::vector<int>::iterator begin = (*it_begin).begin();
		std::vector<int>::iterator end = (*it_begin).end();
		while (begin != end)
		{
			std::cout << *begin << " ";
			begin++;
		}
		std::cout << std::endl;
		it_begin++;
	}

	std::cout << std::endl;

	for (std::vector<std::vector<int>>::iterator it_begin = vvect.begin();it_begin != vvect.end();it_begin++)
	{
		for (std::vector<int>::iterator begin = (*it_begin).begin();begin != (*it_begin).end();begin++)
		{
			std::cout << *begin << " ";
		}
		std::cout << std::endl;
	}
	return 0;
}
```

#### string
##### 构造函数
```cpp
#include <iostream>
#include <string>

int main()
{	
	// string容器基于char*指针封装而成，旨在提供一种更安全的字符串
	// string容器诞生于STL之前，但string从一开始就被设计得有缺陷，最初的string只考虑了单字节的字符，对多字节的字符兼容性极差
	// 当我们使用string容器存储中文等多字节字符时，遍历操作会将多字节字符的每一个字节单独输出，而不是根据字节数跳过相应的字节数后输出，以保证内容能够正确显示
	// 其内部的size()方法，计算的是字符串的字节数，而非字符数
	// 这些问题在C++11后才逐渐被解决，但在C++14前的用户，更多时候需要实现自己的string容器

	// string();  // 创建空string容器
	// string(const char* s);  // 创建string容器并使用字符串初始化
	// string(const string& str);  // 创建string容器并使用另一个string容器初始化
	// string(int n, char c);  // 创建string容器并使用n个字符初始化

	// string()
	std::string str;
	std::cout << str << std::endl;

	// string(const char* s)
	std::string str2("HelloWorld");
	std::cout << str2 << std::endl;

	// string(const string& str)
	std::string str3(str2);
	std::cout << str3 << std::endl;

	// string(int n, char c)
	std::string str4(10, 'A');
	std::cout << str4 << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <string>

int main()
{
	// string& operator=(const char* s);  // 将字符串赋给string容器
	// string& operator=(const string & s);  // 将string容器赋给string容器
	// string& operator=(char c);  // 将字符赋给string容器

	// assign()函数用于将容器中的元素复制到另一个容器之中
	// string& assign(const char* s);  // 复制字符串到容器之中
	// string& assign(const char* s, int n);  // 复制字符串的前n个字符到容器之中
	// string& assign(const string & s);  // 将string容器的元素复制到另一个string容器之中
	// string& assign(int n, char c);  // 复制n个字符到string容器中

	// string& operator=(const char* s);
	std::string str = "HelloWorld";
	std::cout << str << std::endl;

	// string& operator=(const string & s);
	std::string str2 = "你好世界";
	str = str2;
	std::cout << str << std::endl;

	// string& operator=(char c);
	str = 'D';
	std::cout << str << std::endl;



	// string& assign(const char* s);
	str.assign("yinghuolight");
	std::cout << str << std::endl;

	// string& assign(const char* s, int n);
	str.assign("yinghuolight", 7);
	std::cout << str << std::endl;

	// string& assign(const string & s);
	std::string str_template = "SoyoLove";
	str.assign(str_template);
	std::cout << str << std::endl;

	// string& assign(int n, char c);
	str.assign(15, 'Y');
	std::cout << str << std::endl;
	return 0;
}
```

##### 字符串拼接
```cpp
#include <iostream>
#include <string>

int main()
{
	// string& operator+=(const char* str);  // 追加字符串
	// string& operator+=(const char c);  // 追加字符
	// string& operator+=(const string & str);  // 追加string容器

	// string& append(const char* s);  // 追加字符串
	// string& append(const char* s, int n);  // 追加字符串的前n个字符
	// string& append(const string & s);  // 追加string容器
	// string& append(const string & s, int pos, int n);  // 追加字符串中pos开始的n个字符

	// string& operator+=(const char* str);
	std::string str;
	str += "HelloWorld";
	std::cout << str << std::endl;

	// string& operator+=(const char c);
	str += 'A';
	std::cout << str << std::endl;

	// string& operator+=(const string & str);
	std::string str2 = "yinghuolight";
	str += str2;
	std::cout << str << std::endl;



	// string& append(const char* s);
	std::string str3;
	str3.append("HelloWorld");
	std::cout << str3 << std::endl;

	// string& append(const char* s, int n);
	str3.append("HelloWorld", 5);
	std::cout << str3 << std::endl;

	// string& append(const string & s);
	std::string str_template = "114514";
	str3.append(str_template);
	std::cout << str3 << std::endl;

	// string& append(const string & s, int pos, int n);
	str3.append("HelloWorld", 2, 4);
	std::cout << str3 << std::endl;
	return 0;
}
```

##### 字符串查找与替换
```cpp
#include <iostream>
#include <string>

int main()
{
	// int find(const string & str, int pos = 0) const;  // 从pos位置开始查找string容器第一次出现的位置
	// int find(const char* s, int pos = 0) const;  // 从pos位置开始查找字符串第一次出现的位置
	// int find(const char* s, int pos, int n) const;  // 从pos位置开始查找字符串的前n个字符第一次出现的位置
	// int find(const char c, int pos = 0) const;  // 从pos位置开始查找字符第一次出现的位置

	// int rfind(const string & str, int pos = npos) const;  //	从最后一个字符逆向查找字符串最后一次出现的位置
	// int rfind(const char* s, int pos = npos) const;  // 从最后一个字符逆向查找字符串最后一次出现的位置
	// int rfind(const char* s, int pos, int n) const;  // 从pos位置开始查找字符串的前n个字符最后一次出现的位置
	// int rfind(const char c, int pos = 0) const;  // 从pos位置开始查找字符最后一次出现的位置

	// string& replace(int pos, int n, const string & str);  // 从pos位置开始，将n长度的字符覆盖为string容器
	// string& replace(int pos, int n, const char* s);  // 从pos位置开始，将n长度的字符覆盖为字符串

	// int find(const string & str, int pos = 0) const;
	std::string str_find = "Wor";
	std::string str = "HelloWorldHelloWorldHelloWorld";
	std::cout << str.find(str_find) << std::endl;

	// int find(const char* s, int pos = 0) const;
	std::cout << str.find("llo") << std::endl;

	// int find(const char* s, int pos, int n) const;
	std::cout << str.find("HelloWorld", 2, 3) << std::endl;

	// int find(const char c, int pos = 0) const;
	std::cout << str.find("World") << std::endl;



	// int rfind(const string & str, int pos = npos) const;
	std::cout << str.rfind(str_find) << std::endl;

	// int rfind(const char* s, int pos = npos) const;
	std::cout << str.rfind("llo") << std::endl;

	// int rfind(const char* s, int pos, int n) const;
	std::cout << str.rfind("HelloWorld", 2, 3) << std::endl;

	// int rfind(const char c, int pos = 0) const;
	std::cout << str.rfind("World") << std::endl;



	// string& replace(int pos, int n, const string & str);
	str.replace(0, 5, str_find);
	std::cout << str << std::endl;

	// string& replace(int pos, int n, const char* s);
	str.replace(0, 5, "HelloWorld");
	std::cout << str << std::endl;
	return 0;
}
```

##### 字符串比较
```cpp
#include <iostream>
#include <string>

int main()
{
	// int compare(const string &s) const;  // 与另一个string容器逐个比较字符的ASCII码
	// int compare(const char* s) const;  // 与字符串逐个比较字符的ASCII码

	// int compare(const string &s) const;
	std::string str_compare = "HelloWorld";
	std::string str = "HelloQ";
	std::cout << str.compare(str_compare) << std::endl;

	// int compare(const char* s) const;
	std::cout << str.compare("HelloAAAAA") << std::endl;
	return 0;
}
```

##### 字符串存取
```cpp
#include <iostream>
#include <string>

int main()
{
	// char& operator[](int n);  // 获取string容器中下标为n的字符
	// char& at(int n);  // 获取string容器中下标为n的字符

	// char& operator[](int n);
	std::string str = "HelloWorld";
	std::cout << str[5] << std::endl;

	// char& at(int n);
	std::cout << str.at(5) << std::endl;
	return 0;
}
```

##### 字符串插入和删除
```cpp
#include <iostream>
#include <string>

int main()
{
	// string& insert(int pos, const char* s);  // 从pos位置开始，插入字符串
	// string& insert(int pos, const string & str);  // 从pos位置开始，插入string容器
	// string& insert(int pos, int n, char c);  // 从pos位置开始，插入n个字符

	// string& erase(int pos, int n = npos);  //删除从Pos开始的n个字符

	// string& insert(int pos, const char* s);
	std::string str = "HelloWorld";
	str.insert(5, "你好");
	std::cout << str << std::endl;

	// string& insert(int pos, const string & str);
	std::string str_insert = "你好世界";
	str = "HelloWorld";
	str.insert(4, str_insert);
	std::cout << str << std::endl;

	// string& insert(int pos, int n, char c);
	str = "HelloWorld";
	str.insert(0, 5, '0');
	std::cout << str << std::endl;



	// string& erase(int pos, int n = npos);
	str.erase(1, 4);
	std::cout << str << std::endl;
	return 0;
}
```

##### 字符串截取
```cpp
#include <iostream>
#include <string>

int main()
{
	// string substr(int pos = 0, int n = npos) const;  // 截取pos位置开始的n个字符长的字符串

	// string substr(int pos = 0, int n = npos) const;
	std::string str_sub = "HelloWorld";
	std::string str = str_sub.substr(0, 5);
	std::cout << str << std::endl;
	return 0;
}
```

#### vector
##### 构造函数
```cpp
#include <iostream>
#include <vector>

int main()
{
	// vector容器，是为了实现动态数组而诞生的产物

	// vector<T>();  // 创建空vector容器
	// vector(v.begin(), v.end());
	// vector(n, elem);  // 创建vector容器并初始化n个元素
	// vector(const vector& vec);  // 创建vector容器并使用另一个vector容器初始化

	// vector<T>();
	std::vector<int> vect;
	vect.push_back(20);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(50);

	// vector(v.begin(), v.end());
	std::vector<int> vect2(vect.begin(), vect.end());
	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// vector(n, elem);
	std::vector<int> vect3(5, 10);
	for (std::vector<int>::iterator it_begin = vect3.begin();it_begin != vect3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// vector(const vector& vec);
	std::vector<int> vect4(vect3);
	for (std::vector<int>::iterator it_begin = vect4.begin();it_begin != vect4.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <vector>

int main()
{
	// vector& operator=(const vector & vec);

	// assign(beg, end);  // 复制vector容器中[beg, end)区间的元素到另一个vector容器之中
	// assign(n, elem);  // 复制n个元素到vector容器中

	std::vector<int> vect;
	vect.push_back(20);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(50);

	// vector& operator=(const vector & vec);
	std::vector<int> vect2 = vect;
	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// assign(beg, end);
	vect2.assign(vect.begin(), vect.end() - 1);
	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// assign(n, elem);
	vect2.assign(10, 100);
	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 插入和删除
```cpp
#include <iostream>
#include <vector>

int main()
{
	// push_back(ele);  // 尾插元素
	// pop_back();  // 尾删元素

	// insert(const_iterator pos, ele);  //	在迭代器指向的位置插入元素
	// insert(const_iterator pos, int count, ele);  // 在迭代器指向的位置插入n个元素

	// erase(const_iterator pos);  // 删除迭代器指向的元素
	// erase(const_iterator start, const_iterator end);  // 删除迭代器start到迭代器end之间的元素

	// clear();  // 删除容器中所有元素

	std::vector<int> vect(10, 100);

	// push_back(ele);
	vect.push_back(500);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// pop_back();
	vect.pop_back();
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// insert(const_iterator pos, ele);
	vect.insert(vect.begin() + 2, 114514);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// insert(const_iterator pos, int count, ele);
	vect.insert(vect.begin() + 4, 5, 19810);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// erase(const_iterator pos);
	vect.erase(vect.begin() + 4);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// erase(const_iterator start, const_iterator end);
	vect.erase(vect.begin() + 4, vect.begin() + 8);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// clear();
	vect.clear();
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 容量和大小
```cpp
#include <iostream>
#include <vector>

int main()
{
	// empty();  // 判断容器是否为空
	// capacity();  // 容器的容量
	// size();  // 返回容器中元素的个数

	// resize(int num);
	// 重新指定容器的容量为num，若容器变大，则以默认值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	// resize(int num, elem);
	// 重新指定容器的容量为num，若容器变大，则以elem值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	std::vector<int> vect(10, 100);

	// empty();
	std::cout << vect.empty() << std::endl;

	// capacity();
	std::cout << vect.capacity() << std::endl;

	// size();
	std::cout << vect.size() << std::endl;

	// resize() 容器变大  填充默认值
	vect.resize(20);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// resize() 容器变小  填充默认值
	vect.resize(5);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// resize() 容器变大  填充特殊值
	vect = std::vector<int>(10, 100);
	vect.resize(20, 50);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// resize() 容器变小  填充特殊值
	vect.resize(15, 25);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 数据存取
```cpp
#include <iostream>
#include <vector>

int main()
{
	// operator[];  // 返回索引idx的元素
	// at(int idx);  // 返回索引idx的元素

	// front();  // 返回容器中第一个元素
	// back();  // 返回容器中最后一个元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(20);
	vect.push_back(30);
	vect.push_back(40);

	// operator[];
	std::cout << vect[1] << std::endl;

	// at(int idx);
	std::cout << vect.at(1) << std::endl;



	// front();
	std::cout << vect.front() << std::endl;

	// back();
	std::cout << vect.back() << std::endl;
	return 0;
}
```

##### 互换
```cpp
#include <iostream>
#include <vector>

int main()
{
	// swap(vec);  // 互换两个容器的元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(20);
	vect.push_back(30);
	vect.push_back(40);

	std::vector<int> vect2;
	vect2.push_back(10);
	vect2.push_back(20);
	vect2.push_back(30);
	vect2.push_back(40);
	vect2.push_back(40);
	vect2.push_back(30);
	vect2.push_back(20);
	vect2.push_back(10);

	vect.swap(vect2);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 预留空间
```cpp
#include <iostream>
#include <vector>

int main()
{
	// reserve(int len);  // 为容器预留len个元素的位置，预先分配足够的内存，预留位置不进行默认初始化，不可直接访问

	std::vector<int> vect;
	vect.reserve(200);
	std::cout << vect.capacity() << std::endl;  // 容器的容量
	std::cout << vect.size() << std::endl;  // 容器的元素个数
	return 0;
}
```

#### deque
##### 构造函数
```cpp
#include <iostream>
#include <deque>

int main()
{
	// deque容器，是为了实现能从头部或尾部两个方向插入元素的动态数组而诞生的产物
	// deque容器插入或删除元素的效率较高，访问元素的效率较低

	// deque<T>();  // 创建空deque容器
	// deque(d.begin(), d.end());
	// deque(n, elem);  // 创建deque容器并初始化n个元素
	// deque(const deque & deq);  // 创建deque容器并使用另一个deque容器初始化

	// deque<T>();
	std::deque<int> deq;
	deq.push_back(20);
	deq.push_back(40);
	deq.push_back(60);
	deq.push_back(80);

	// deque(d.begin(), d.end());
	std::deque<int> deq2(deq.begin(), deq.end());
	for (std::deque<int>::iterator it_begin = deq2.begin();it_begin != deq2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// deque(n, elem);
	std::deque<int> deq3(10, 1145);
	for (std::deque<int>::iterator it_begin = deq3.begin();it_begin != deq3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// deque(const deque & deq);
	std::deque<int> deq4(deq3);
	for (std::deque<int>::iterator it_begin = deq4.begin();it_begin != deq4.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <deque>

int main()
{
	// deque& operator=(const deque & vec);

	// assign(beg, end);  // 复制deque容器中[beg, end)区间的元素到另一个deque容器之中
	// assign(n, elem);  // 复制n个元素到deque容器中

	std::deque<int> deq(10, 1145);

	// deque& operator=(const deque & vec);
	std::deque<int> deq2 = deq;



	// assign(beg, end);
	deq2.assign(deq.begin(), deq.end() - 5);
	for (std::deque<int>::iterator it_begin = deq2.begin();it_begin != deq2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// assign(n, elem);
	deq2.assign(10, 100);
	for (std::deque<int>::iterator it_begin = deq2.begin();it_begin != deq2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 插入和删除
```cpp
#include <iostream>
#include <deque>

int main()
{
	// push_back(elem);  // 尾插元素
	// push_front(elem);  // 头插元素
	// pop_back();  // 尾删元素
	// pop_front();  // 头删元素

	// insert(pos, elem);  // 在迭代器指向的位置插入元素
	// insert(pos, n, elem);  // 在迭代器指向的位置插入n个元素
	// insert(pos, beg, end);  // 在迭代器指向的位置插入另一个容器中[beg,end)区间的元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素

	// clear();  // 删除容器中所有元素

	std::deque<int> deq(5, 1145);

	// push_back(elem);
	deq.push_back(20);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// push_front(elem);
	deq.push_front(19810);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// pop_back();
	deq.pop_back();
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// pop_front();
	deq.pop_front();
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// insert(pos, elem);
	deq.insert(deq.begin() + 3, 19810);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// insert(pos, n, elem);
	deq.insert(deq.begin() + 3, 5, 555);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// insert(pos, beg, end);
	deq.insert(deq.begin() + 3, deq.begin(), deq.begin() + 3);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// erase(pos);
	deq.erase(deq.begin());
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// erase(beg, end);
	deq.erase(deq.begin(), deq.begin() + 5);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// clear();
	deq.clear();
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <deque>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	// resize(int num);
	// 重新指定容器的容量为num，若容器变大，则以默认值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	// resize(int num, elem);
	// 重新指定容器的容量为num，若容器变大，则以elem值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	std::deque<int> deq(10, 100);

	// empty();
	std::cout << deq.empty() << std::endl;

	// size();
	std::cout << deq.size() << std::endl;

	// resize(int num);
	deq.resize(20);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// resize(int num, elem);
	deq.resize(25, 19810);
	for (std::deque<int>::iterator it_begin = deq.begin();it_begin != deq.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 数据存取
```cpp
#include <iostream>
#include <deque>

int main()
{
	// operator[];  // 返回索引idx的元素
	// at(int idx);  // 返回索引idx的元素

	// front();  // 返回容器中第一个元素
	// back(); // 返回容器中最后一个元素

	std::deque<int> deq;
	deq.push_back(1145);
	deq.push_back(19810);
	deq.push_back(255);
	deq.push_back(8000);

	// operator[];
	std::cout << deq[1] << std::endl;

	// at(int idx);
	std::cout << deq.at(1) << std::endl;



	// front();
	std::cout << deq.front() << std::endl;

	// back();
	std::cout << deq.back() << std::endl;
	return 0;
}
```

#### stack
##### 构造函数
```cpp
#include <iostream>
#include <stack>

int main()
{
	// stack容器是一种先进后出的数据结构，又名栈
	// 栈只有一个端口，入口和出口共用此端口
	// 由于其特殊的结构，外界只能够访问栈最顶端的元素

	// stack<T>()  // 创建空stack容器
	// stack(const stack &stk);  // 创建stack容器并使用另一个stack容器初始化

	// stack<T>()
	std::stack<int> stack;
	stack.push(1145);
	stack.push(19810);
	stack.push(555);

	// stack(const stack &stk);
	std::stack<int> stack2(stack);
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <stack>

int main()
{
	// stack& operator=(const stack &stk);

	std::stack<int> stack;
	stack.push(1145);
	stack.push(19810);
	stack.push(555);

	// stack& operator=(const stack &stk);
	std::stack<int> stack2 = stack;
	return 0;
}
```

##### 数据存取
```cpp
#include <iostream>
#include <stack>

int main()
{
	// push(elem);  // 添加元素到栈中
	// pop();  // 移除栈顶元素

	// top();  // 返回栈顶元素

	// push(elem);
	std::stack<int> stack;
	stack.push(1145);
	stack.push(19810);
	stack.push(555);
	std::cout << stack.top() << std::endl;

	// pop();
	stack.pop();
	std::cout << stack.top() << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <stack>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::stack<int> stack;
	stack.push(1145);
	stack.push(19810);
	stack.push(555);

	// empty();
	std::cout << stack.empty() << std::endl;

	// size();
	std::cout << stack.size() << std::endl;
	return 0;
}
```

#### queue
##### 构造函数
```cpp
#include <iostream>
#include <queue>

int main()
{
	// quque容器是一种先进先出的数据结构，又名队列
	// 队列有两个端口，一端负责新增元素，一端则负责移除元素
	// 由于其特殊的结构，外界只能够访问队头元素和队尾元素

	// queue<T>()  // 创建空queue容器
	// queue(const queue &que);  // 创建queue容器并使用另一个queue容器初始化

	// queue<T>()
	std::queue<int> que;
	que.push(1145);
	que.push(19810);
	que.push(555);

	// queue(const queue &que);
	std::queue<int> que2(que);
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <queue>

int main()
{
	// queue& operator=(const queue &que);

	std::queue<int> que;
	que.push(1145);
	que.push(19810);
	que.push(555);

	// queue& operator=(const queue &que);
	std::queue<int> que2 = que;
	return 0;
}
```

##### 数据存取
```cpp
#include <iostream>
#include <queue>

int main()
{
	// push(elem);  // 添加元素到队尾
	// pop();  // 移除队头元素

	// back();  // 返回队尾元素
	// front();  // 返回队头元素

	// push(elem);
	std::queue<int> que;
	que.push(1145);
	que.push(19810);
	que.push(555);
	std::cout << que.back() << std::endl;
	std::cout << que.front() << std::endl;

	std::cout << std::endl;

	// pop();
	que.pop();
	std::cout << que.back() << std::endl;
	std::cout << que.front() << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <queue>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::queue<int> que;
	que.push(1145);
	que.push(19810);
	que.push(555);

	// empty();
	std::cout << que.empty() << std::endl;

	// size();
	std::cout << que.size() << std::endl;
	return 0;
}
```

#### list
##### 构造函数
```cpp
#include <iostream>
#include <list>

int main()
{
	// list容器是一种非连续存储数据的数据结构，其存储的数据随机存放于不同的内存空间中，并通过指针相互链接，呈现链式的结构，也被称为链表
	// 由于其独特的结构，链表无需移动元素即可实现插入与删除操作，使得链表在插入和删除操作上效率较高
	// 但链表访问元素时，需要从头部遍历至特定元素，效率较低，且链表所占用的内存空间与执行操作所需要消耗的时间较长
	// 链表的插入和删除操作不会导致迭代器的失效，这是实现高效插入和删除的关键

	// list<T>();  // 创建一个空list容器
	// list(v.begin(), v.end());
	// list(n, elem);  // 创建list容器并初始化n个元素
	// list(const list & lst);  // 创建list容器并使用另一个list容器初始化

	// list<T>();
	std::list<int> list;
	list.push_back(1145);
	list.push_back(1145);
	list.push_back(1145);
	list.push_back(1145);

	// list(v.begin(), v.end());
	std::list<int> list2(list.begin(), list.end());
	for (std::list<int>::iterator it_begin = list2.begin();it_begin != list2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// list(n, elem);
	std::list<int> list3(10, 1145);
	for (std::list<int>::iterator it_begin = list3.begin();it_begin != list3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// list(const list & lst);
	std::list<int> list4(list3);
	for (std::list<int>::iterator it_begin = list4.begin();it_begin != list4.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <list>

int main()
{
	// list& operator=(const list & lst);

	// assign(beg, end);  // 复制list容器中[beg, end)区间的元素到另一个list容器之中
	// assign(n, elem);  // 复制n个元素到vector容器中

	std::list<int> list;
	list.push_back(1145);
	list.push_back(1145);
	list.push_back(1145);
	list.push_back(1145);

	// list& operator=(const list & lst);
	std::list<int> list2 = list;
	for (std::list<int>::iterator it_begin = list2.begin();it_begin != list2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// assign(beg, end);
	list2.assign(list.begin(), list.end());
	for (std::list<int>::iterator it_begin = list2.begin();it_begin != list2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// assign(n, elem);
	list2.assign(10, 2);
	for (std::list<int>::iterator it_begin = list2.begin();it_begin != list2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 插入和删除
```cpp
#include <iostream>
#include <list>

int main()
{
	// push_back(elem);  // 尾插元素
	// push_front(elem);  // 头插元素
	// pop_back();  // 尾删元素
	// pop_front();  // 头删元素

	// insert(pos, elem);  // 在迭代器指向的位置插入元素
	// insert(pos, n, elem);  // 在迭代器指向的位置插入n个元素
	// insert(pos, beg, end);  // 在迭代器指向的位置插入另一个容器中[beg,end)区间的元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素

	// remove(elem)  // 删除容器中匹配的元素

	// clear();  // 删除容器中所有元素

	std::list<int> list(5, 1145);

	// push_back(elem);
	list.push_back(20);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// push_front(elem);
	list.push_front(19810);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// pop_back();
	list.pop_back();
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// pop_front();
	list.pop_front();
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// insert(pos, elem);
	list.insert(list.begin(), 19810);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// insert(pos, n, elem);
	list.insert(list.end(), 5, 555);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// insert(pos, beg, end);
	list.insert(list.begin(), list.begin(), list.end());
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// erase(pos);
	list.erase(list.begin());
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// erase(beg, end);
	list.erase(list.begin(), list.end());
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// remove()
	list = std::list<int>(5, 1145);
	list.push_back(19810);
	list.remove(1145);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// clear();
	list.clear();
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <list>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	// resize(int num);
	// 重新指定容器的容量为num，若容器变大，则以默认值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	// resize(int num, elem);
	// 重新指定容器的容量为num，若容器变大，则以elem值填充新位置
	// 如果容器变小，则末尾超出容器长度的元素被删除

	std::list<int> list(10, 100);

	// empty();
	std::cout << list.empty() << std::endl;

	// size();
	std::cout << list.size() << std::endl;

	// resize(int num);
	list.resize(20);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// resize(int num, elem);
	list.resize(25, 19810);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 数据存取
```cpp
#include <iostream>
#include <list>

int main()
{
	// front();  // 返回容器第一个元素
	// back();  //返回容器最后一个元素

	std::list<int> list;
	list.push_back(1145);
	list.push_back(19810);
	list.push_back(555);
	list.push_back(202020);

	// front();
	std::cout << list.front() << std::endl;

	// back();
	std::cout << list.back() << std::endl;
	return 0;
}
```

##### 互换，反转，排序
```cpp
#include <iostream>
#include <list>

int main()
{
	// swap(lst)  // 交换两个容器的元素
	// reverse();  // 反转容器的元素
	// sort();  // 排序容器的元素

	std::list<int> list;
	list.push_back(1145);
	list.push_back(19810);
	list.push_back(555);
	list.push_back(202020);

	std::list<int> list2;
	list2.push_back(4564);
	list2.push_back(214);
	list2.push_back(2362);
	list2.push_back(315145);

	// swap(lst)
	list.swap(list2);
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// reverse();
	list.reverse();
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// sort();
	list.sort();
	for (std::list<int>::iterator it_begin = list.begin();it_begin != list.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

#### set
##### 构造函数
```cpp
#include <iostream>
#include <set>

int main()
{
	// set容器是一种关联式容器，其底层基于二叉树实现
	// 关联式容器存储的元素以键值对的形式存在，其每一个元素都具有一独一无二的键名
	// 关联式容器能够凭借键名快速查找到对应的值，也能够凭借键名高效地插入，删除元素
	// set容器的键名即是键值，所以set容器不允许存储重复的元素，除此之外，set容器还会自动排序存储的元素

	// set<T>();  // 创建空set容器
	// set(const set & st);  // 创建set容器并使用另一个set容器初始化

	// set<T>();
	std::set<int> set;
	set.insert(20);
	set.insert(15);
	set.insert(10);
	set.insert(5);
	set.insert(10);
	set.insert(15);

	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// set(const set & st);
	std::set<int> set2(set);
	for (std::set<int>::iterator it_begin = set2.begin();it_begin != set2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <set>

int main()
{
	// set& operator=(const set & st);

	std::set<int> set;
	set.insert(20);
	set.insert(15);
	set.insert(10);
	set.insert(5);
	set.insert(10);
	set.insert(15);

	// set& operator=(const set & st);
	std::set<int> set2 = set;
	for (std::set<int>::iterator it_begin = set2.begin();it_begin != set2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 插入和删除
```cpp
#include <iostream>
#include <set>

int main()
{
	// insert(elem);  // 插入元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素
	// erase(elem);  // 删除容器中值为elem的元素

	// clear();  // 删除容器中所有元素

	std::set<int> set;
	// insert(elem);
	set.insert(20);
	set.insert(15);
	set.insert(10);
	set.insert(5);
	set.insert(10);
	set.insert(15);

	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// erase(pos);
	set.erase(set.begin());
	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// erase(beg, end);
	set.erase(set.begin(), set.end());
	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	set.insert(20);
	set.insert(15);
	set.insert(10);
	set.insert(5);
	set.insert(10);
	set.insert(15);

	// erase(elem);
	set.erase(15);
	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// clear();
	set.clear();
	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <set>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::set<int> set;
	set.insert(1145);
	set.insert(19810);
	set.insert(555);

	// empty();
	std::cout << set.empty() << std::endl;

	// size();
	std::cout << set.size() << std::endl;
	return 0;
}
```

##### 互换，查找，统计
```cpp
#include <iostream>
#include <set>

int main()
{
	// swap(st);  // 交换两个容器的元素
	// find(key);  // 查找键名为key的元素是否存在，返回该键的迭代器
	// count(key);  // 统计键名为key的元素个数

	std::set<int> set;
	set.insert(1145);
	set.insert(19810);
	set.insert(555);
	set.insert(1145);
	set.insert(19810);
	set.insert(555);

	std::set<int> set2;
	set2.insert(15246);
	set2.insert(12312);
	set2.insert(2415);
	set2.insert(15246);
	set2.insert(12312);
	set2.insert(2415);

	// swap(st);
	set.swap(set2);
	for (std::set<int>::iterator it_begin = set.begin();it_begin != set.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// find(key);
	std::set<int>::iterator set_find = set2.find(19810);
	std::cout << *set2.find(19810) << std::endl;

	// count(key);
	std::cout << set2.count(19810) << std::endl;
	return 0;
}
```

#### multiset
##### 构造函数
```cpp
#include <iostream>
#include <set>

int main()
{
	// multiset容器是为了实现允许存储相同键名的set而诞生的产物

	// multiset<T>();  // 创建空multiset容器
	// multiset(const multiset & st);  // 创建multiset容器并使用另一个multiset容器初始化

	// multiset<T>();
	std::multiset<int> multiset;
	multiset.insert(20);
	multiset.insert(15);
	multiset.insert(10);
	multiset.insert(5);
	multiset.insert(10);
	multiset.insert(15);

	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// multiset(const multiset & st);
	std::multiset<int> multiset2(multiset);
	for (std::multiset<int>::iterator it_begin = multiset2.begin();it_begin != multiset2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <set>

int main()
{
	// multiset& operator=(const multiset & st);

	std::multiset<int> multiset;
	multiset.insert(20);
	multiset.insert(15);
	multiset.insert(10);
	multiset.insert(5);
	multiset.insert(10);
	multiset.insert(15);

	// multiset& operator=(const multiset & st);
	std::multiset<int> multiset2 = multiset;
	for (std::multiset<int>::iterator it_begin = multiset2.begin();it_begin != multiset2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 插入和删除
```cpp
#include <iostream>
#include <set>

int main()
{
	// insert(elem);  // 插入元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素
	// erase(elem);  // 删除容器中值为elem的元素

	// clear();  // 删除容器中所有元素

	std::multiset<int> multiset;
	// insert(elem);
	multiset.insert(20);
	multiset.insert(15);
	multiset.insert(10);
	multiset.insert(5);
	multiset.insert(10);
	multiset.insert(15);

	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// erase(pos);
	multiset.erase(multiset.begin());
	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// erase(beg, end);
	multiset.erase(multiset.begin(), multiset.end());
	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	multiset.insert(20);
	multiset.insert(15);
	multiset.insert(10);
	multiset.insert(5);
	multiset.insert(10);
	multiset.insert(15);

	// erase(elem);
	multiset.erase(15);
	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;



	// clear();
	multiset.clear();
	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <set>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::multiset<int> multiset;
	multiset.insert(1145);
	multiset.insert(19810);
	multiset.insert(555);

	// empty();
	std::cout << multiset.empty() << std::endl;

	// size();
	std::cout << multiset.size() << std::endl;
	return 0;
}
```

##### 互换，查找，统计
```cpp
#include <iostream>
#include <set>

int main()
{
	// swap(st);  // 交换两个容器的元素
	// find(key);  // 查找键名为key的元素是否存在，返回该键的迭代器
	// count(key);  // 统计键名为key的元素个数

	std::multiset<int> multiset;
	multiset.insert(1145);
	multiset.insert(19810);
	multiset.insert(555);
	multiset.insert(1145);
	multiset.insert(19810);
	multiset.insert(555);

	std::multiset<int> multiset2;
	multiset2.insert(15246);
	multiset2.insert(12312);
	multiset2.insert(2415);
	multiset2.insert(15246);
	multiset2.insert(12312);
	multiset2.insert(2415);

	// swap(st);
	multiset.swap(multiset2);
	for (std::multiset<int>::iterator it_begin = multiset.begin();it_begin != multiset.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// find(key);
	std::multiset<int>::iterator multiset_find = multiset2.find(19810);
	std::cout << *multiset2.find(19810) << std::endl;

	// count(key);
	std::cout << multiset2.count(19810) << std::endl;
	return 0;
}
```

#### map
##### 对组
```cpp
#include <iostream>

int main()
{
	// map容器是一种关联式容器，其底层基于二叉树实现
	// map容器存储的元素以键值对的形式存在，其每一个元素都具有一独一无二的键名
	// map容器能够凭借键名快速查找到对应的值，也能够凭借键名高效地插入，删除元素
	// map容器不允许存储重复的键，且会根据其对应的键值自动进行排序
	// 通常将具有键值对关系的元素称为对组，map存储的元素皆为对组

	// pair<T, K>()  // 创建空对组
	// pair(const T t, const K k)  // 创建对组并使用t，k初始化对组
	// make_pair(const T t, const K k)  // 使用make_pair()函数创建对组

	// pair<T, K>()
	std::pair<std::string, int> pair;
	pair.first = "yhlight";  // 对组的键名
	pair.second = 18;  // 对组的键值
	std::cout << pair.first << " " << pair.second << std::endl;

	// pair(const T t, const K k)
	std::pair<std::string, int> pair2("shuiyang", 20);
	std::cout << pair2.first << " " << pair2.second << std::endl;

	// make_pair(const T t, const K k)
	std::pair<std::string, int> pair4 = std::make_pair("huanlaiting", 18);
	std::cout << pair4.first << " " << pair4.second << std::endl;
	return 0;
}
```

##### 构造函数
```cpp
#include <iostream>
#include <map>

int main()
{
	// map<T, K>();  // 创建空map容器
	// map(const map & mp);  // 创建map容器并使用另一个map容器初始化

	// map<T, K>();
	std::map<std::string, int> map;
	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	// map(const map & mp);
	std::map<std::string, int> map2(map);
	for (std::map<std::string, int>::iterator it_begin = map2.begin();it_begin != map2.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <map>

int main()
{
	// map& operator=(const map & mp);

	std::map<std::string, int> map;
	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	// map& operator=(const map &mp);
	std::map<std::string, int> map2 = map;
	for (std::map<std::string, int>::iterator it_begin = map2.begin();it_begin != map2.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <map>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::map<std::string, int> map;
	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	// empty();
	std::cout << map.empty() << std::endl;

	// size();
	std::cout << map.size() << std::endl;
	return 0;
}
```

##### 插入与删除
```cpp
#include <iostream>
#include <map>

int main()
{
	// insert(elem);  // 插入元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素
	// erase(key);  // 删除容器中键名为key的元素

	// clear();  // 删除容器中所有元素

	std::map<std::string, int> map;
	// insert(elem);
	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	// 使用make_pair()函数创建对组
	map.insert(std::make_pair("huanlaiting", 18));

	map.insert(std::map<std::string, int>::value_type("snowie", 20));

	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;



	// erase(pos);
	map.erase(map.begin());
	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	// erase(beg, end);
	map.erase(map.begin(), map.end());
	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	// erase(key);
	map.erase("yhlight");
	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;



	// clear();
	map.clear();
	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;
	return 0;
}
```

##### 互换，查找，统计
```cpp
#include <iostream>
#include <map>

int main()
{
	// swap(st);  // 交换两个容器的元素
	// find(key);  // 查找键名为key的元素是否存在，返回该键的迭代器
	// count(key);  // 统计键名为key的元素个数

	std::map<std::string, int> map;
	map.insert(std::pair<std::string, int>("yinghuolight", 18));
	map.insert(std::pair<std::string, int>("yhlight", 24));
	map.insert(std::pair<std::string, int>("shuiyang", 18));

	std::map<std::string, int> map2;
	map2.insert(std::pair<std::string, int>("yuanshen", -1));
	map2.insert(std::pair<std::string, int>("mingchao", 23));
	map2.insert(std::pair<std::string, int>("bh3", 0));

	// swap(st);
	map.swap(map2);
	for (std::map<std::string, int>::iterator it_begin = map.begin();it_begin != map.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	// find(key)
	std::cout << (*map.find("mingchao")).first << " " << (*map.find("mingchao")).second << std::endl;

	// count(key);
	std::cout << map.count("mingchao") << std::endl;
	return 0;
}
```

#### multimap
##### 构造函数
```cpp
#include <iostream>
#include <map>

int main()
{
	// multimap容器是为了实现允许存储相同键名的map而诞生的产物

	// multimap<T, K>();  // 创建空multimap容器
	// multimap(const multimap & mp);  // 创建multimap容器并使用另一个multimap容器初始化

	// multimap<T, K>();
	std::multimap<std::string, int> multimap;
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));

	// multimap(const multimap & mp);
	std::multimap<std::string, int> multimap2(multimap);
	for (std::multimap<std::string, int>::iterator it_begin = multimap2.begin();it_begin != multimap2.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	return 0;
}
```

##### 赋值操作
```cpp
#include <iostream>
#include <map>

int main()
{
	// multimap& operator=(const multimap & mp);

	std::multimap<std::string, int> multimap;
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));

	// multimap& operator=(const multimap &mp);
	std::multimap<std::string, int> multimap2 = multimap;
	for (std::multimap<std::string, int>::iterator it_begin = multimap2.begin();it_begin != multimap2.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	return 0;
}
```

##### 大小操作
```cpp
#include <iostream>
#include <map>

int main()
{
	// empty();  // 判断容器是否为空
	// size();  // 返回容器中元素的个数

	std::multimap<std::string, int> multimap;
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));

	// empty();
	std::cout << multimap.empty() << std::endl;

	// size();
	std::cout << multimap.size() << std::endl;
	return 0;
}
```

##### 插入与删除
```cpp
#include <iostream>
#include <map>

int main()
{
	// insert(elem);  // 插入元素

	// erase(pos);  // 删除迭代器指向的元素
	// erase(beg, end);  // 删除迭代器beg到迭代器end之间的元素
	// erase(key);  // 删除容器中键名为key的元素

	// clear();  // 删除容器中所有元素

	std::multimap<std::string, int> multimap;
	// insert(elem);
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));

	// 使用make_pair()函数创建对组
	multimap.insert(std::make_pair("huanlaiting", 18));

	multimap.insert(std::multimap<std::string, int>::value_type("snowie", 20));

	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;



	// erase(pos);
	multimap.erase(multimap.begin());
	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	// erase(beg, end);
	multimap.erase(multimap.begin(), multimap.end());
	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));

	// erase(key);
	multimap.erase("yhlight");
	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;



	// clear();
	multimap.clear();
	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;
	return 0;
}
```

##### 互换，查找，统计
```cpp
#include <iostream>
#include <map>

int main()
{
	// swap(st);  // 交换两个容器的元素
	// find(key);  // 查找键名为key的元素是否存在，返回该键的迭代器
	// count(key);  // 统计键名为key的元素个数

	std::multimap<std::string, int> multimap;
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));
	multimap.insert(std::pair<std::string, int>("shuiyang", 18));
	multimap.insert(std::pair<std::string, int>("yinghuolight", 18));
	multimap.insert(std::pair<std::string, int>("yhlight", 24));

	std::multimap<std::string, int> multimap2;
	multimap2.insert(std::pair<std::string, int>("yuanshen", -1));
	multimap2.insert(std::pair<std::string, int>("mingchao", 23));
	multimap2.insert(std::pair<std::string, int>("bh3", 0));
	multimap2.insert(std::pair<std::string, int>("mingchao", 23));
	multimap2.insert(std::pair<std::string, int>("bh3", 0));

	// swap(st);
	multimap.swap(multimap2);
	for (std::multimap<std::string, int>::iterator it_begin = multimap.begin();it_begin != multimap.end();it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;

	// find(key)
	std::cout << (*multimap.find("mingchao")).first << " " << (*multimap.find("mingchao")).second << std::endl;

	// count(key);
	std::cout << multimap.count("mingchao") << std::endl;
	return 0;
}
```

#### 伪函数 / 函数对象
##### 仿函数的基本使用
```cpp
#include <iostream>

class MyCompare
{
public:
	int operator()(const int& a, const int& b)
	{
		return a + b;
	}
};

int main()
{
	// 重载函数调用操作符()的类，其对象被称为函数对象
	// 函数对象调用重载的()时，行为类似函数调用，因此也被称为仿函数
	// 函数对象(仿函数)是一个对象，不是一个函数

	// 函数对象在使用时，可以像普通函数那样调用, 可以有参数，可以有返回值，也可以作为参数传递，但函数对象可以有自己的状态

	MyCompare myCompare;
	std::cout << myCompare(30, 20) << std::endl;
	return 0;
}
```

##### 仿函数作函数参数
```cpp
#include <iostream>
#include <set>

class MyCompare
{
public:
	bool operator()(const int& val, const int& val2) const
	{
		return val < val2;
	}
};

void bubble_sort(int* arr, const int& len)
{
	for (int i = 0;i < len - 1;i++)
	{
		for (int j = 0;j < len - 1 - i;j++)
		{
			if (arr[j] > arr[j + 1])
			{
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

void bubble_sort(int* arr, const int& len, const MyCompare& myCompare)
{
	for (int i = 0;i < len - 1;i++)
	{
		for (int j = 0;j < len - 1 - i;j++)
		{
			if (myCompare(arr[j], arr[j + 1]))
			{
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

int main()
{
	int arr[] = { 6,2,24,12,345,15,7634,2412,6234,6124 };
	int len = sizeof(arr) / sizeof(arr[0]);
	MyCompare myCompare;
	bubble_sort(arr, len, myCompare);
	for (int i = 0;i < len;i++)
	{
		std::cout << arr[i] << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

##### 指定容器的排序规则
###### 指定set容器基本数据类型排序规则
```cpp
#include <iostream>
#include <set>

class MyCompare
{
public:
	bool operator()(const int& val, const int& val2) const
	{
		return val > val2;
	}
};

int main()
{
	std::set<int> set;
	set.insert(4);
	set.insert(6);
	set.insert(1);
	set.insert(2);
	set.insert(3);

	// set容器自动排序顺序默认为升序
	for (std::set<int>::iterator it_begin = set.begin(); it_begin != set.end(); it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	// 传递仿函数修改排序规则
	std::set<int, MyCompare> set2;
	set2.insert(4);
	set2.insert(6);
	set2.insert(1);
	set2.insert(2);
	set2.insert(3);
	for (std::set<int, MyCompare>::iterator it_begin = set2.begin(); it_begin != set2.end(); it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;
	return 0;
}
```

###### 指定set容器自定义数据类型排序规则
```cpp
#include <iostream>
#include <set>

class YhLight
{
public:
	YhLight(const std::string& name, const int& age)
	{
		this->name = name;
		this->age = age;
	}

	std::string name;
	int age;
};

class MyCompare
{
public:
	bool operator()(const YhLight& yhlight, const YhLight& yhlight2) const
	{
		if (yhlight.age != yhlight2.age)
		{
			return yhlight.age > yhlight2.age;
		}
		return yhlight.name > yhlight2.name;
	}
};

int main()
{
	std::set<YhLight, MyCompare> set;
	YhLight yhlight = YhLight("没睡醒的扬", 22);
	YhLight yhlight2 = YhLight("荧火light", 18);
	YhLight yhlight3 = YhLight("幻来听", 18);
	YhLight yhlight4 = YhLight("幻来听", 25);
	set.insert(yhlight);
	set.insert(yhlight2);
	set.insert(yhlight3);
	set.insert(yhlight4);

	for (std::set<YhLight, MyCompare>::iterator it_begin = set.begin(); it_begin != set.end(); it_begin++)
	{
		std::cout << (*it_begin).name << " " << (*it_begin).age << std::endl;
	}
	return 0;
}
```

###### 指定map容器排序规则
```cpp
#include <iostream>
#include <map>

class MyCompare
{
public:
	bool operator()(const std::string& key, const std::string& key2) const
	{
		return key < key2;
	}
};

int main()
{
	std::map<std::string, int, MyCompare> map;
	map.insert(std::make_pair("yinghuolight", 24));
	map.insert(std::make_pair("shuiyang", 18));
	map.insert(std::make_pair("huanlaiting", 20));

	for (std::map<std::string, int, MyCompare>::iterator it_begin = map.begin(); it_begin != map.end(); it_begin++)
	{
		std::cout << (*it_begin).first << " " << (*it_begin).second << std::endl;
	}
	std::cout << std::endl;
	return 0;
}
```

##### 谓词
###### 一元谓词
```cpp
#include <iostream>

// 返回bool类型的仿函数称为谓词
// 只有一个形参且返回bool类型的仿函数，称为一元谓词

class IsEven
{
public:
	bool operator()(const int& val) const
	{
		return val % 2 == 0;
	}
};

int main()
{
	IsEven isEven;
	std::cout << isEven(10) << std::endl;
	return 0;
}
```

###### 二元谓词
```cpp
#include <iostream>

// 只有两个形参且返回bool类型的仿函数，称为二元谓词

class MyCompare
{
public:
	bool operator()(const int& val, const int& val2) const
	{
		return val > val2;
	}
};

int main()
{
	MyCompare myCompare;
	std::cout << myCompare(10, 20) << std::endl;
	return 0;
}
```

##### 内建函数对象
###### 算术仿函数
```cpp
#include <iostream>
#include <functional>

// STL内置了一些函数对象，开发者可以直接使用

int main()
{
	// plus<T>();  // 创建加法函数对象
	// minus<T>();  // 创建减法函数对象
	// multiplies<T>();  // 创建乘法函数对象
	// divides<T>();  // 创建除法函数对象
	// modulus<T>();  // 创建取模函数对象
	// negate<T>();  // 创建取反函数对象

	// plus<T>();
	std::plus<int> add;
	std::cout << add(50, 50) << std::endl;

	// minus<T>();
	std::minus<int> sub;
	std::cout << sub(50, 30) << std::endl;

	// multiplies<T>();
	std::multiplies<int> mul;
	std::cout << mul(5, 3) << std::endl;

	// divides<T>();
	std::divides<int> div;
	std::cout << div(20, 5) << std::endl;

	// modulus<T>();
	std::modulus<int> mod;
	std::cout << mod(20, 5) << std::endl;

	// negate<T>();
	std::negate<int> neg;
	std::cout << neg(50) << std::endl;
	return 0;
}
```

###### 关系仿函数
```cpp
#include <iostream>
#include <functional>

int main()
{
	// equal_to<T>();  // 创建等于函数对象
	// not_equal_to<T>();  // 创建不等于函数对象
	// greater<T>();  // 创建大于函数对象
	// greater_equal<T>();  // 创建大于等于函数对象
	// less<T>();  // 创建小于函数对象
	// less_equal<T>();  // 创建小于等于函数对象

	// equal_to<T>();
	std::equal_to<int> equal;
	std::cout << equal(20, 20) << std::endl;

	// not_equal_to<T>();
	std::not_equal_to<int> not_equal;
	std::cout << not_equal(20, 30) << std::endl;

	// greater<T>();
	std::greater<int> greater;
	std::cout << greater(30, 20) << std::endl;

	// greater_equal<T>();
	std::greater_equal<int> greater_equal;
	std::cout << greater_equal(20, 20) << std::endl;

	// less<T>();
	std::less<int> less;
	std::cout << less(10, 20) << std::endl;

	// less_equal<T>();
	std::less_equal<int> less_equal;
	std::cout << less_equal(20, 20) << std::endl;
	return 0;
}
```

###### 逻辑仿函数
```cpp
#include <iostream>
#include <functional>

int main()
{
	// logical_and<T>();  // 创建逻辑与函数对象
	// logical_or<T>();  // 创建逻辑或函数对象
	// logical_not<T>();  // 创建逻辑非函数对象

	int num = 20;
	int num2 = 40;

	// logical_and<T>();
	std::logical_and<int> logical_and;
	if (logical_and(num % 2 == 0, num2 % 2 == 0))
	{
		std::cout << "num和num2都是偶数" << std::endl;
	}

	// logical_or<T>();
	std::logical_or<int> logical_or;
	if (logical_or(num % 2 == 0, num2 % 2 == 0))
	{
		std::cout << "num和num2至少有一个是偶数" << std::endl;
	}

	// logical_not<T>();
	std::logical_not<int> logical_not;
	if (logical_not(num % 2 == 0))
	{
		std::cout << "num不是偶数" << std::endl;
	}
	else
	{
		std::cout << "num是偶数" << std::endl;
	}
	return 0;
}
```

#### STL常用算法
##### 常用遍历算法
###### for_each
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

void print(const int& val)
{
	std::cout << val << " ";
}

class PrintNumber
{
public:
	void operator()(const int& val)
	{
		std::cout << val << " ";
	}
};

int main()
{
	// for_each(iterator beg, iterator end, _func);
	// beg 开始迭代器
	// end 结束迭代器
	// _func 负责打印的函数或者函数对象

	std::vector<int> v;
	v.push_back(10);
	v.push_back(30);
	v.push_back(40);
	v.push_back(20);
	v.push_back(50);

	for_each(v.begin(), v.end(), print);

	std::cout << std::endl;

	PrintNumber printNumber = PrintNumber();
	for_each(v.begin(), v.end(), printNumber);
	return 0;
}
```

###### transform
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

void print(const int& val)
{
	std::cout << val << " ";
}

int getNumber(const int& val)
{
	return val;
}

int main()
{
	// 搬运容器中的元素到另一个容器中
	// transform(iterator beg1, iterator end1, iterator beg2, _func);
	// beg1 源容器开始迭代器
	// end1 源容器结束迭代器
	// beg2 目标容器开始迭代器
	// _func 函数或者函数对象

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	std::vector<int> vect2;
	vect2.resize(vect.size());  // 设置容器的容量
	transform(vect.begin(), vect.end(), vect2.begin(), getNumber);
	for_each(vect2.begin(), vect2.end(), print);
	return 0;
}
```

##### 常用查找算法
###### find
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 按值查找元素，若找到则返回指定位置迭代器，若找不到则返回结束迭代器位置
	// find(iterator beg, iterator end, value);
	// beg 开始迭代器
	// end 结束迭代器
	// value 查找的元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	std::cout << *find(vect.begin(), vect.end(), 20) << std::endl;
	return 0;
}
```

###### find_if
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

bool is_even(const int& num)
{
	return num % 2 == 0;
}

int main()
{
	// 按值查找元素，若找到则返回指定位置迭代器，若找不到则返回结束迭代器位置
	// find_if(iterator beg, iterator end, _Pred);
	// beg 开始迭代器
	// end 结束迭代器
	// _Pred 函数或者谓词（返回bool类型的仿函数）

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	std::cout << *find_if(vect.begin(), vect.end(), is_even) << std::endl;
	return 0;
}
```

###### adjacent_finf
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 查找相邻重复元素，返回所在位置的迭代器
	// adjacent_find(iterator beg, iterator end);
	// beg 开始迭代器
	// end 结束迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	std::cout << *adjacent_find(vect.begin(), vect.end()) << std::endl;
	return 0;
}
```

###### binary_search
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 二分查找
	// bool binary_search(iterator beg, iterator end, value);
	// beg 开始迭代器
	// end 结束迭代器
	// value 查找的元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	sort(vect.begin(), vect.end());
	std::cout << binary_search(vect.begin(), vect.end(), 20) << std::endl;
	return 0;
}
```

###### count
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 统计元素出现次数
	// count(iterator beg, iterator end, value);
	// beg 开始迭代器
	// end 结束迭代器
	// value 统计的元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(30);
	vect.push_back(40);
	vect.push_back(40);
	vect.push_back(20);
	vect.push_back(50);

	std::cout << count(vect.begin(), vect.end(), 40) << std::endl;
	return 0;
}
```

###### count_if
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

bool is_even(const int& num)
{
	return num % 2 == 0;
}

int main()
{
	// 按条件统计元素出现次数
	// count_if(iterator beg, iterator end, _Pred);
	// beg 开始迭代器
	// end 结束迭代器
	// _Pred 函数或谓词

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);

	std::cout << count_if(vect.begin(), vect.end(), is_even) << std::endl;
	return 0;
}
```

##### 常用排序算法
###### sort
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class MyCompare
{
public:
	bool operator()(const int& val, const int& val2)
	{
		return val > val2;
	}
};

int main()
{
	// 对容器中的元素进行排序
	// sort(iterator beg, iterator end, _Pred);
	// beg 开始迭代器
	// end 结束迭代器
	// _Pred 排序的规则函数或谓词

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);

	MyCompare myCompare;
	sort(vect.begin(), vect.end(), myCompare);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### random_shuffle
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <ctime>

int main()
{
	// 随机调整容器元素的顺序
	// random_shuffle(iterator beg, iterator end);
	// beg 开始迭代器
	// end 结束迭代器

	srand((unsigned int)time(NULL));  // 设置随机发生器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);

	random_shuffle(vect.begin(), vect.end());
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### merge
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 合并两个容器的元素，并存储到另一容器中
	// 两个容器必须有序
	// merge(iterator beg1, iterator end1, iterator beg2, iterator end2, iterator dest);
	// beg1 容器1开始迭代器
	// end1 容器1结束迭代器
	// beg2 容器2开始迭代器
	// end2 容器2结束迭代器
	// dest 目标容器开始迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);
	sort(vect.begin(), vect.end());

	std::vector<int> vect2;
	vect2.push_back(1145);
	vect2.push_back(214);
	vect2.push_back(532);
	vect2.push_back(26);
	vect2.push_back(34);
	vect2.push_back(142);
	sort(vect2.begin(), vect2.end());

	std::vector<int> vect3;
	vect3.resize(vect.size() + vect2.size());
	merge(vect.begin(), vect.end(), vect2.begin(), vect2.end(), vect3.begin());
	for (std::vector<int>::iterator it_begin = vect3.begin();it_begin != vect3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### reverse
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 反转指定范围的元素
	// reverse(iterator beg, iterator end);
	// beg 开始迭代器
	// end 结束迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);

	reverse(vect.begin(), vect.end());
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

##### 常用拷贝算法
###### copy
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 拷贝容器中的元素到另一个容器中
	// copy(iterator beg, iterator end, iterator dest);
	// beg 开始迭代器
	// end 结束迭代器
	// dest 目标起始迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(40);
	vect.push_back(15);
	vect.push_back(20);
	vect.push_back(50);

	std::vector<int> vect2;
	vect2.resize(vect.size());

	copy(vect.begin(), vect.end(), vect2.begin());
	for (std::vector<int>::iterator it_begin = vect2.begin();it_begin != vect2.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

##### 常用替换算法
###### repalce
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 替换区间内的旧元素为新元素
	// replace(iterator beg, iterator end, oldvalue, newvalue);
	// beg开始迭代器
	// end结束迭代器
	// oldvalue旧元素
	// newvalue新元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(10);
	vect.push_back(15);
	vect.push_back(10);
	vect.push_back(50);

	replace(vect.begin(), vect.end(), 10, 1145);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### repalce_if
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

bool is_even(const int& val)
{
	return val % 2 == 0;
}

int main()
{
	// 按条件替换区间内的旧元素为新元素
	// replace_if(iterator beg, iterator end, _pred, newvalue);
	// beg 开始迭代器
	// end 结束迭代器
	// _pred 谓词
	// newvalue 替换的新元素

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);

	replace_if(vect.begin(), vect.end(), is_even, 1145);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### swap
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	// 互换两个容器的元素
	// swap(container c1, container c2);
	// c1容器1
	// c2容器2

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);

	std::vector<int> vect2;
	vect2.push_back(115);
	vect2.push_back(1235);
	vect2.push_back(13);
	vect2.push_back(215);
	vect2.push_back(5342);
	vect2.push_back(124);

	swap(vect, vect2);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

##### 常用算术生成算法
###### accumulate
```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main()
{
	// 计算容器元素总和
	// accumulate(iterator beg, iterator end, value);
	// beg 开始迭代器
	// end 结束迭代器
	// value 起始值

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);

	std::cout << accumulate(vect.begin(), vect.end(), vect[0]) << std::endl;
	return 0;
}
```

###### fill
```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main()
{
	// 向容器中填充元素
	// fill(iterator beg, iterator end, value);
	// beg 开始迭代器
	// end 结束迭代器
	// value 填充的值

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);

	fill(vect.begin(), vect.end(), 1145);
	for (std::vector<int>::iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

##### 常用集合算法
###### set_intersection
```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

int main()
{
	// 求两个容器的元素的交集
	// 两个容器必须有序
	// set_intersection(iterator beg1, iterator end1, iterator beg2, iterator end2, iterator dest);
	// beg1 容器1开始迭代器
	// end1 容器1结束迭代器
	// beg2 容器2开始迭代器
	// end2 容器2结束迭代器
	// dest 目标容器开始迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);
	sort(vect.begin(), vect.end());

	std::vector<int> vect2;
	vect2.push_back(5);
	vect2.push_back(20);
	vect2.push_back(15);
	vect2.push_back(35);
	sort(vect2.begin(), vect2.end());

	std::vector<int> vect3;
	vect3.resize(vect.size() > vect2.size() ? vect2.size() : vect.size());

	set_intersection(vect.begin(), vect.end(), vect2.begin(), vect2.end(), vect3.begin());
	for (std::vector<int>::iterator it_begin = vect3.begin();it_begin != vect3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### set_union
```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

int main()
{
	// 求两个容器的元素的并集
	// 两个容器必须有序
	// set_union(iterator beg1, iterator end1, iterator beg2, iterator end2, iterator dest);
	// beg1 容器1开始迭代器
	// end1 容器1结束迭代器
	// beg2 容器2开始迭代器
	// end2 容器2结束迭代器
	// dest 目标容器开始迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);
	sort(vect.begin(), vect.end());

	std::vector<int> vect2;
	vect2.push_back(5);
	vect2.push_back(20);
	vect2.push_back(15);
	vect2.push_back(35);
	sort(vect2.begin(), vect2.end());

	std::vector<int> vect3;
	vect3.resize(vect.size() + vect2.size());

	set_union(vect.begin(), vect.end(), vect2.begin(), vect2.end(), vect3.begin());
	for (std::vector<int>::iterator it_begin = vect3.begin();it_begin != vect3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

###### set_difference
```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

int main()
{
	// 求两个容器的元素的差集
	// 两个容器必须有序
	// set_difference(iterator beg1, iterator end1, iterator beg2, iterator end2, iterator dest);
	// beg1 容器1开始迭代器
	// end1 容器1结束迭代器
	// beg2 容器2开始迭代器
	// end2 容器2结束迭代器
	// dest 目标容器开始迭代器

	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(25);
	vect.push_back(20);
	vect.push_back(15);
	vect.push_back(40);
	vect.push_back(50);
	sort(vect.begin(), vect.end());

	std::vector<int> vect2;
	vect2.push_back(5);
	vect2.push_back(20);
	vect2.push_back(15);
	vect2.push_back(35);
	sort(vect2.begin(), vect2.end());

	std::vector<int> vect3;
	vect3.resize(vect.size() > vect2.size() ? vect.size() : vect2.size());

	set_difference(vect.begin(), vect.end(), vect2.begin(), vect2.end(), vect3.begin());
	for (std::vector<int>::iterator it_begin = vect3.begin();it_begin != vect3.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

## 进阶编程
### auto关键字
```cpp
#include <iostream>
#include <vector>
#include <map>

int main()
{
	// auto关键字用于自动推导变量的类型
	// 不建议滥用auto，auto关键字主要用于简化不影响阅读与理解但是书写复杂的代码，例如迭代器

	std::vector<int> vect;
	// vector<int>::iterator it = vect.begin();
	auto it_begin = vect.begin();

	std::map<std::string, int> map;
	// map<string, int>::iterator it2 = map.begin();
	auto it_begin2 = map.begin();
	return 0;
}
```

### 宏
```cpp
#include <iostream>
#include <vector>

// 宏是一种预处理指令
// 宏能够使用自定义的名称表示复杂的表达式
// 在预编译阶段，编译器会将自定义名称替换成复杂的表达式

// 使用宏重定义类型名称
#define viterator_int std::vector<int>::iterator  // 在预编译阶段，所有的viterator_int会被替换成std::vector<int>::iterator

// 使用宏定义复杂表达式
// 宏的本质是文本的替换，如果使用宏定义复杂的表达式，需要使用括号避免不必要的错误，保证结果的正确
#define add(X,Y) (X + Y)  // 在预编译阶段，所有的add(X,Y)会被替换成(X + Y)
#define max(X,Y) (X > Y ? X : Y)  // 在预编译阶段，所有的add(X,Y)会被替换成(X > Y ? X : Y)

// 使用 \ 连接下一行，定义跨行表达式
#define swap(X,Y)							\
X = X ^ Y;									\
Y = X ^ Y;									\
X = X ^ Y  // 此处无分号，避免分号的重复

int main()
{
	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(50);
	vect.push_back(20);
	vect.push_back(30);
	vect.push_back(5);
	vect.push_back(25);
	for (viterator_int it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	std::cout << std::endl;

	std::cout << add(3, 4) << std::endl;
	std::cout << max(10, 50) << std::endl;

	int num = 10;
	int num2 = 20;
	swap(num, num2);
	std::cout << "num = " << num << std::endl;
	std::cout << "num2 = " << num2 << std::endl;
	return 0;
}
```

### do...while(0)
```cpp
#include <iostream>
#include <functional>

// do...while(0)可以用来保护宏，确保核心代码为一个整体
#define swap(X,Y)							\
do											\
{											\
		X = X ^ Y;							\
		Y = X ^ Y;							\
		X = X ^ Y;							\
} while(0)

int main()
{
	int num = 10;
	int num2 = 20;
	swap(num, num2);
	std::cout << "num = " << num << std::endl;
	std::cout << "num2 = " << num2 << std::endl;

	// do...while(0)可以用来创建临时代码块
	int num = 20;
	int num2 = 30;
	int result = 0;
	do
	{
		std::plus<int> add;  // 若对象在接下来的程序运行期间内不会再使用，则可以提前释放资源
		result = add(num, num);
	} while (0);

	return 0;
}
```

### 内联函数
```c++
#include <iostream>

// 在C++中，每一次函数调用都会创建一次函数副本，这大大增加了程序的性能开销
// 为了解决频繁调用函数时频繁创建函数副本导致的性能开销，C++11引进了内联函数

// 内联函数是一种优化手段，在编译过程中编译器会将内联函数的代码插入到每一个函数调用的地方
// 内联函数可以减少函数调用的开销，但可能会造成代码的膨胀

// 内联函数的实现应该尽可能简单，只执行少量的代码
// 内联函数应该用于频繁调用的函数，且应该在头文件中定义，使用时包含此头文件
// 内联函数不适合递归

inline int add(int a, int b)
{
	return a + b;
}

int main()
{
	std::cout << add(1, 2) << std::endl;  // 编译器会将add(1, 2)替换成1 + 2
	return 0;
}
```

### 类型别名
#### typedef
```cpp
#include <iostream>
#include <vector>

// typedef关键字可以为数据类型起一个别名

typedef std::vector<int>::iterator vector_iterator;

int main()
{
	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(50);
	vect.push_back(60);
	vect.push_back(30);
	vect.push_back(20);
	vect.push_back(80);

	for (vector_iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

#### using
```cpp
#include <iostream>
#include <vector>

// using关键字在C++11被引进，旨在代替typedef，提供更现代化的语法

using vector_iterator = std::vector<int>::iterator;

int main()
{
	std::vector<int> vect;
	vect.push_back(10);
	vect.push_back(50);
	vect.push_back(60);
	vect.push_back(30);
	vect.push_back(20);
	vect.push_back(80);

	for (vector_iterator it_begin = vect.begin();it_begin != vect.end();it_begin++)
	{
		std::cout << *it_begin << " ";
	}
	return 0;
}
```

### constexpr关键字
```cpp
#include <iostream>

// constexpr关键字是为了实现编译阶段求值，减少程序运行时性能开销的产物，在C++11版本被引入

constexpr int add(int a, int b)  // 由constexpr修饰的函数在编译阶段计算调用结果
{
	return a + b;  // 在C++11版本中，constexpr修饰的函数内部不能有复杂逻辑，如循环，分支
}

int main()
{
	constexpr int result = add(3, 3);  // 编译时计算结果
	static_assert(result == 6, "结果不是6");  // 静态断言，编译时断言，若result不等于6，则程序抛出编译时错误提示开发者
	// 断言机制常用于代码的调式和测试，当断言失败时，程序会终止运行，同时输出错误信息
	return 0;
}
```

### assert 断言
```cpp
#define NDEBUG  // 必须写在cassert前

#include <iostream>
#include <cassert>

// 断言是一种除错机制，用于验证代码是否符合开发者的预期，确保错误尽可能在测试与调试阶段被发现
// 代码不符合开发者预期的结果时，即不满足断言的条件时，断言会抛出错误信息并强制终止程序的运行

// NDEBUG宏用于禁用断言

class Plus
{
public:
	int operator()(const int& val, const int& val2)
	{
		return val + val2;
	}
};

constexpr int add(int a, int b)
{
	return a + b;
}

int main()
{
	Plus* plus = new Plus();
	assert(plus == nullptr);  // 如果plus是空指针，则终止程序
	std::cout << (*plus)(10, 20) << std::endl;
	delete plus;

	constexpr int result = add(1, 2);
	// 静态断言可用于编译时检查
	static_assert(result == 3, "结果不是3");  // NDEBUG对static_assert无效
	return 0;
}
```

### lambda表达式
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// lambda表达式是C++11引进的重要特征，用于定义匿名的函数，并允许让函数像变量一样传递
// lambda表达式的结构为[捕获列表](参数列表) -> 返回类型 {函数体}

void test()
{
	int c = 20;
	auto test = [c](int a, int b) -> int
		{
			// lambda表达式主要以值传递的方式捕获外部的变量
			// lambda表达式内部的副本变量不允许被修改
			// c = 50;
			return a + b + c;
		};
	std::cout << test(10, 20) << std::endl;
}

void test2()
{
	int c = 30;
	int* pc = &c;
	auto test = [pc](int a, int b) -> int
		{
			// 如果lambda表达式以址传递的方式捕获外部变量
			// 则内部的副本变量能够被修改，但外部的变量也会受到影响
			*pc = 50;
			return a + b + *pc;
		};
	std::cout << test(10, 20) << std::endl;
	std::cout << c << std::endl;
}

void test3()
{
	int c = 30;
	auto test = [&c](int a, int b) -> int
		{
			// 如果lambda表达式以引用传递的方式捕获外部变量
			// 则内部的副本变量能够被修改，但外部的变量也会受到影响
			c = 50;
			return a + b + c;
		};
	std::cout << test(10, 20) << std::endl;
	std::cout << c << std::endl;
}

void test4()
{
	// 如果lambda表达式无形参，则可以省略括号
	auto test = []
		{
			std::cout << "hello world" << std::endl;
		};
}

void test5()
{
	// 对上面的补充
	auto test = []()
		{
			std::cout << "hello world" << std::endl;
		};
}

void test6()
{
	// 如果lambda表达式需要指明返回类型，则必须带有括号
	auto test = []() -> int
		{
			return 0;
		};
}

void test7()
{
	// 如果lambda表达式只需要执行少量语句，则可以横向书写
	auto test = []() -> int { return 0; };
}

int main()
{
	test();
	test2();
	test3();
	test4();

	std::cout << std::endl;

	std::vector<int> vect;
	vect.push_back(30);
	vect.push_back(50);
	vect.push_back(80);
	vect.push_back(20);
	vect.push_back(10);

	// lambda表达式一般配合auto使用
	auto to_print = [](const int& i)
		{
			std::cout << i << " ";
		};

	for_each(vect.begin(), vect.end(), to_print);

	std::cout << std::endl;

	for_each(vect.begin(), vect.end(), [](const int& i) { std::cout << i << " "; });
	return 0;
}
```

### mutable关键字
```cpp
#include <iostream>

// mutable关键字是C++98引进的特征，旨在使变量处在处在一直可变的状态，突破const的约束
// C++11添加了mutable关键字对lambda表达式的支持

class YhLight
{
public:
	void test() const  // 常函数内部禁止修改成员变量的值
	{
		mutable_num = 10;  // 由mutable关键字修饰的变量处在一直可变的状态，突破了const的约束
		// const_num = 10;
	}

private:
	mutable int mutable_num;
	int const_num;
};

int main()
{
	int num = 10;
	auto test = [num]() mutable -> void  // mutable所修饰的lambda表达式内部的副本变量能够被修改
		{
			num = 20;
			std::cout << num << std::endl;
		};

	test();
	std::cout << num << std::endl;
	return 0;
}
```

### 指针进阶
#### 指针数组
```cpp
#include <iostream>

int main()
{
	int a[] = { 1,2,3,4,5 };
	int b[] = { 2,3,4,5,6 };
	int c[] = { 3,4,5,6,7 };

	int* arr[] = { a,b,c };
	for (int i = 0;i < 3;i++)
	{
		for (int j = 0;j < 5;j++)
		{
			std::cout << *(*(arr + i) + j) << " ";
		}
		std::cout << std::endl;
	}
	return 0;
}
```

#### 指向指针数组的指针
```cpp
#include <iostream>

int main()
{
	int a[] = { 1,2,3,4,5 };
	int b[] = { 2,3,4,5,6 };
	int c[] = { 3,4,5,6,7 };

	int* arr[] = { a,b,c };

	// 指向指针数组的指针
	// *parr 这是一个指针
	// (*parr)[3] 这个指针指向一个能够容纳3个元素的数组，需要明确指出数组的长度
	// *(*parr)[3] 这个数组里面的元素都是指针
	int* (*parr)[3] = &arr;
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 5; j++)
		{
			std::cout << *(*(*parr + i) + j) << " ";
		}
		std::cout << std::endl;
	}
	return 0;
}
```

#### 数组指针
```cpp
#include <iostream>

int main()
{
	int arr[] = { 1,2,3,4,5,6,7,8,9,10 };

	int (*parr)[10] = &arr;
	for (int i = 0; i < 10; i++)
	{
		std::cout << *(*parr + i) << " ";
	}
	return 0;
}
```

#### 数组指针数组
```cpp
#include <iostream>

int main()
{
	int arr[] = { 1,2,3,4,5,6,7,8,9,10 };
	int arr2[] = { 11,12,13,14,15,16,17,18,19,20 };

	int (*parr)[10] = &arr;
	int (*parr2)[10] = &arr2;

	// 数组指针数组
	// parrarr[]，这是一个数组
	// *parrarr[]，数组中的每一个元素都是指针
	// (*parrarr[])[10]，每一个元素都指向一个能够容纳10个元素的数组
	int (*parrarr[])[10] = { parr, parr2 };
	for (int i = 0; i < 10; i++)
	{
		std::cout << *(**parrarr + i) << " ";
	}
	return 0;
}
```

#### 指向数组指针数组的指针
```cpp
#include <iostream>

int main()
{
	int arr[] = { 1,2,3,4,5,6,7,8,9,10 };
	int arr2[] = { 11,12,13,14,15,16,17,18,19,20 };

	int (*parr)[10] = &arr;
	int (*parr2)[10] = &arr2;

	int (*parrarr[])[10] = { parr, parr2 };

	// 指向数组指针数组的指针
	// *ptr，这是一个指针
	// (*ptr)[2]，这个指针指向一个能够容纳两个元素的数组
	// (*(*ptr)[2])，这个数组中的每一个元素都是指针
	// (*(*ptr)[2])[10]，这个指针指向一个能够容纳10个元素的数组
	int (*(*ptr)[2])[10] = &parrarr;

	for (int i = 0;i < 10;i++)
	{
		std::cout << *(***ptr + i) << " ";
	}
	return 0;
}
```

#### 函数指针
```cpp
#include <iostream>

int add(int x, int y)
{
	return x + y;
}

int main()
{
	// *padd padd是一个指针
	// (*padd)(int, int) 这个指针指向一个函数
	int (*padd)(int, int) = add;
	std::cout << padd(1, 2) << std::endl;
	return 0;
}
```

#### 函数指针数组
```cpp
#include <iostream>

int add(int x, int y)
{
	return x + y;
}

int sub(int x, int y)
{
	return x - y;
}

int main()
{
	int (*padd)(int, int) = add;
	int (*psub)(int, int) = sub;

	// parr[] parr是一个数组
	// *parr[] 数组的每一个元素都是指针
	// (*parr[])(int, int) 这些指针都指向一个函数
	int (*parr[])(int, int) = { add, sub };
	std::cout << (*parr)(1, 2) << std::endl;
	return 0;
}
```

#### 指向函数指针数组的指针
```cpp
#include <iostream>

int add(int x, int y)
{
	return x + y;
}

int sub(int x, int y)
{
	return x - y;
}

int main()
{
	int (*padd)(int, int) = add;
	int (*psub)(int, int) = sub;

	int (*parr[])(int, int) = { add, sub };

	// *pparr pparr是一个指针
	// (*pparr)[2] 这个指针指向一个能够容纳两个元素的数组
	// *(*pparr)[2] 数组中的每一个元素都是指针
	// (*(*pparr)[2])(int, int) 这些指针指向一个函数
	int(*(*pparr)[2])(int, int) = &parr;

	std::cout << (**pparr)(1, 2) << std::endl;
	return 0;
}
```

#### void* 与 通用函数
```cpp
#include <iostream>

void my_sort(void* ptr, const int len, const int size, int compare(const void* e1, const void* e2))
{
	char buffer[128] = { 0 };

	for (int i = 0;i < len - 1;i++)
	{
		for (int j = 0;j < len - 1 - i;j++)
		{
			char* ptr1 = (char*)ptr + j * size;
			char* ptr2 = (char*)ptr + (j + 1) * size;

			if (compare(ptr1, ptr2) > 0)
			{
				for (int k = 0; k < size; k++) {
					buffer[k] = *(((char*)ptr + j * size) + k);
					*(((char*)ptr + j * size) + k) = *(((char*)ptr + (j + 1) * size) + k);
					*(((char*)ptr + (j + 1) * size) + k) = buffer[k];
				}
			}
		}
	}
}

int cmp_int(const void* e1, const void* e2)
{
	if (*((const int*)e1) > *((const int*)e2))
	{
		return 1;
	}
	else if (*((const int*)e1) < *((const int*)e2))
	{
		return -1;
	}
	else
	{
		return 0;
	}
}

int cmp_double(const void* e1, const void* e2)
{
	if (*((const double*)e1) > *((const double*)e2))
	{
		return 1;
	}
	else if (*((const double*)e1) < *((const double*)e2))
	{
		return -1;
	}
	else {
		return 0;
	}
}

void print(const void* ptr, const int len, const int size, void print_realize(const void* e))
{
	for (int i = 0; i < len; i++)
	{
		print_realize((const char*)ptr + i * size);
	}
}

void print_int(const void* e)
{
	std::cout << *((const int*)e) << " ";
}

int main()
{
	int arr[5] = { 5, 4, 3, 2, 1 };
	int len = sizeof(arr) / sizeof(arr[0]);
	int size = sizeof(arr[0]);
	my_sort(arr, len, size, cmp_int);
	print(arr, len, size, print_int);
	return 0;
}
```

### 结构体进阶
#### 结构体伪函数
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct print
{
	void operator()(const int& val)
	{
		std::cout << val << " ";
	}
};

int main()
{
	std::vector<int> vect;
	for (int i = 0;i < 10;i++)
	{
		vect.push_back(i);
	}

	struct print pri;
	for_each(vect.begin(), vect.end(), pri);
	return 0;
}
```

### 引用进阶
#### 左值引用与右值引用
```cpp
#include <iostream>

class YhLight
{
public:
	YhLight(const std::string& name, const int& age)
	{
		this->name = name;
		this->age = age;
	}

	void show()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

int main()
{
	// 左值引用与右值引用是C++中的高级特征
	// 左值引用与右值引用能够减少资源的浪费，提高程序的性能，是程序优化不可避免的选择

	// 何为左值？何为右值？
	// 常通过 = 进行划分左值与右值
	// 处在 = 左侧的为左值，处在 = 右侧的为右值
	// 但这仅是简单的判断，左值与右值是相对的概念，左右值要根据所处的上下文进行判断

	// 如何判断左值？
	// 左值具有地址，具有名称，存储在内存之中，能够长时间存活于程序的生命周期中
	// 左值能够进行读写，也能够使用名称操作所指向的地址

	// 如何判断右值？
	// 右值通常不具有地址，不具有名称，存储在寄存器之中，生命周期短暂

	// num -> 左值  10 -> 右值
	int num = 10;

	// 左值引用
	int& this_num = num;

	// 右值引用
	int&& this_right_num = 10;
	// 10是一个临时的值，不具有地址，指针无法直接指向10
	// 为了让指针能够指向此值，编译器需要将10放进临时的内存中
	// 指针则通过指向此临时的内存，间接指向此值

	// 右值引用不允许直接引用左值
	// 需要使用move()函数将左值转换成右值，间接进行引用
	// move()函数并没有改变左值的性质，而是让编译器认为此为右值
	// 你可以通过反汇编代码查看move()函数与左值引用的实现
	int&& right_num = std::move(num);

	// int& this_num = num;
	// 00007FF7F2066875  lea         rax,[num]  
	// 00007FF7F2066879  mov         qword ptr[this_num], rax

	// int&& right_num = std::move(num);
	// 00007FF7F206688C  lea         rax, [num]
	// 00007FF7F2066890  mov         qword ptr[right_num], rax

	// 右值引用最大的用途是触发移动构造
	// 移动构造的作用将一个变量的资源移交给另一个变量，避免不必要的拷贝操作
	// 如复制长度很长的字符串或很大的数组，如果使用拷贝操作将占用极大的资源
	// 而移动构造则是置空原变量的指向，让新变量直接指向这块内存地址，避免了不必要的拷贝操作

	YhLight yhlight("yhlight", 18);
	YhLight yhlight2 = std::move(yhlight);
	yhlight.show();  // 原变量string置空
	yhlight2.show();
	return 0;
}
```

### 移动构造函数
```cpp
#include <iostream>

class Shuiyang
{
public:
	Shuiyang(const std::string& name, const int& age) : name(name), age(age) {};

	void show()
	{
		std::cout << name << " " << age << std::endl;
	}
private:
	std::string name;
	int age;
};

class YhLight
{
public:
	YhLight(const std::string& name, const int& age) : shuiyang(new Shuiyang(name, age)) {};

	YhLight(YhLight&& yhlight) noexcept  // 移动构造函数
	{
		shuiyang = yhlight.shuiyang;  // 移交资源
		yhlight.shuiyang = nullptr;  // 置空源对象的指向

		std::cout << "移动构造函数" << std::endl;
	}

	~YhLight()
	{
		if (shuiyang != nullptr)
		{
			delete shuiyang;
			shuiyang = nullptr;
		}
	}

	Shuiyang* shuiyang;
};

int main()
{
	YhLight yhlight("yinghuolight", 24);
	YhLight yhlight2 = std::move(yhlight);
	// yhlight.shuiyang->show();
	yhlight2.shuiyang->show();
	return 0;
}
```

### 智能指针
#### 智能指针的概述
实践中，内存的释放时机难以确定，需要手动释放内存的普通指针很容易因为没有释放内存而造成内存泄露  
为了解决内存泄露问题，C++11引入了智能指针，旨在自动释放内存，防止内存泄露  
智能指针基于类模板封装普通指针而成，旨在使用对象模拟指针的行为，并借助析构函数释放内存  

memory库提供了四种智能指针  
unique_ptr 独占智能指针  
shared_ptr 共享智能指针  
weak_ptr 弱智能指针  
auto_ptr 自动智能指针（C++98，C++17已弃用）  

#### unique_ptr
##### unique_ptr的创建与使用
```cpp
#include <iostream>
#include <memory>

// unique_ptr 独享智能指针指向的内存空间相互之间不能够共享  
// 每一块内存空间仅且只有一个unique_ptr指针指向  

class YhLight
{
public:
	YhLight(std::string name = "荧火light", int age = 18) :name(name), age(age)
	{
		std::cout << "调用构造函数" << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << std::endl;
	}

	void print()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

int main()
{
	// 智能指针的创建
	int num = 20;
	int* ptr = new int(num);
	// 不能使用int* ptr = &num;
	// 两者所处在的内存区域不同

	// 传入已经定义的指针(不常用做法)
	std::unique_ptr<int> auto_ptr(ptr);

	// 使用new操作符创建(常用做法)
	std::unique_ptr<int> auto_ptr2(new int(10));

	// (C++14)使用make_unique()函数创建(C++14以上推荐做法)
	std::unique_ptr<int> auto_ptr3 = std::make_unique<int>(20);



	// 智能指针的使用
	std::unique_ptr<YhLight> yhlight_ptr(new YhLight());
	// 智能指针使用方式与普通指针相似
	(*yhlight_ptr).print();
	yhlight_ptr->print();

	// 析构函数被调用，指针被销毁，内存已被释放
	return 0;
}
```

##### explicit关键字
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight() {}

	explicit YhLight(int test)
	{
		this->test = test;
	}

	int test;
};

class Shuiyang : public YhLight
{
public:

	Shuiyang() {}

	Shuiyang(int test)
	{
		this->test = test;
	}

	int test;
};

int main()
{
	// 隐式类型转换是编程语言中一种基本特征，它允许不同类型之间相互转换时，自动将值的类型进行转换
	// C++提供了十分强大的隐式类型转换机制，能够实现如下操作
	// 小范围类型  ->  大范围类型

	int num_int = 10;
	long num_long = num_int;

	// 整型  <-->  浮点型

	float num_float = num_int;
	int num_int2 = num_float;

	// 指针类型  ->  void*
	int* num_ptr = &num_int;
	void* void_ptr = num_ptr;

	// 非const修饰  <-->  const修饰

	int num_int3 = 10;
	const int num_const = num_int3;
	int num_int4 = num_const;

	// 子类  ->  父类
	YhLight yhlight = Shuiyang();
	YhLight* yhlight_ptr = new Shuiyang();
	delete yhlight_ptr;

	// 除此之外，如果类中存在单个参数的构造函数，将此类型的值赋予给对象时，会调用构造函数创建一个新的对象
	// 然而，这种机制并没有想象中那么方便，反而是一种可能的隐患
	Shuiyang shuiyang = 12;
	std::cout << shuiyang.test << std::endl;

	// 为了禁用这种隐式类型转换，C++引入了explicit关键字，用于修饰构造函数，禁止隐式类型转换
	// YhLight yhlight2 = 12; // 编译错误

	// unique_ptr 独享智能指针为了独占资源的所有权
	// 其构造函数由explicit修饰，禁止通过隐式类型转换创建对象
	// 除此之外还删除了拷贝构造函数与赋值操作符，阻止通过拷贝操作创建对象
	std::unique_ptr<YhLight> yhlight_unique_ptr(new YhLight(12));
	return 0;
}
```

##### unique_ptr作函数参数
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name = "荧火light", const int& age = 18) : name(name), age(age)
	{
		std::cout << "调用构造函数" << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << std::endl;
	}

	void print()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

// 由于unique_ptr 独享智能指针删除了拷贝构造函数，因此无法通过值传递的形式传递智能指针
void to_print(const std::unique_ptr<YhLight>& yhlight_ptr)
{
	yhlight_ptr->print();
}

int main()
{
	std::unique_ptr<YhLight> yhlight_ptr(new YhLight());
	to_print(yhlight_ptr);
	return 0;
}
```

##### unique_ptr与移动构造
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

private:
	std::string name;
};

std::unique_ptr<YhLight> func()
{
	std::unique_ptr<YhLight> yhlight3(new YhLight("荧火3"));
	return yhlight3;
}

int main()
{
	std::unique_ptr<YhLight> yhlight(new YhLight("荧火1"));
	std::unique_ptr<YhLight> yhlight2(new YhLight("荧火2"));
	std::cout << "调用func函数之前" << std::endl;

	// 独享智能指针不允许隐式转换或拷贝构造，但允许移动构造
	// 触发移动构造，将yhlight3的资源所有权转移给yhlight2
	yhlight2 = func();

	std::cout << "调用func函数之后" << std::endl;
	return 0;
}
```

##### nullptr置空
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

private:
	std::string name;
};

int main()
{
	std::unique_ptr<YhLight> yhlight(new YhLight("荧火"));

	if (yhlight != nullptr)
		std::cout << "yhlight不为空" << std::endl;

	yhlight = nullptr;  // 手动释放智能指针

	if (yhlight == nullptr)
		std::cout << "yhlight为空" << std::endl;
	return 0;
}
```

##### 返回原始指针的控制权
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

private:
	std::string name;
};

int main()
{
	std::unique_ptr<YhLight> yhlight(new YhLight("荧火"));

	YhLight* yhlight_ptr = yhlight.release();  // 置空yhlight，释放对原始指针的控制权，并返回原始指针
	if (yhlight == nullptr)
		std::cout << "yhlight置空" << std::endl;

	// 释放原始指针，避免内存泄露
	delete yhlight_ptr;
	return 0;
}
```

##### 重定向智能指针
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

private:
	std::string name;
};

int main()
{
	std::unique_ptr<YhLight> yhlight(new YhLight("荧火1"));

	yhlight.reset();  // 置空yhlight
	if (yhlight == nullptr)
		std::cout << "yhlight置空" << std::endl;

	yhlight.reset(new YhLight("荧火2"));  // 更改内置指针
	return 0;
}
```

##### 交换内置指针
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

	void print()
	{
		std::cout << name << std::endl;
	}

private:
	std::string name;
};

int main()
{
	std::unique_ptr<YhLight> yhlight(new YhLight("荧火1"));
	std::unique_ptr<YhLight> yhlight2(new YhLight("荧火2"));
	yhlight.swap(yhlight2);  // 交换两个智能指针的内置指针
	yhlight->print();
	yhlight2->print();
	return 0;
}
```

##### unique_ptr与多态
```cpp
#include <iostream>
#include <memory>

class YhLight
{
	friend class Shuiyang;
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

	virtual void print()
	{
		std::cout << name << std::endl;
	}

private:
	std::string name;
};

class Shuiyang : public YhLight
{
public:
	using YhLight::YhLight;

	void to_print()
	{
		std::cout << "这是子类" << name << std::endl;
	}
};

int main()
{
	std::unique_ptr<YhLight> yhlight(new Shuiyang("子类"));
	yhlight->print();
	return 0;
}
```

##### unique_ptr数组
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name)
	{
		this->name = name;
		std::cout << "调用构造函数" << name << std::endl;
	}

	~YhLight()
	{
		std::cout << "调用析构函数" << name << std::endl;
	}

	virtual void print()
	{
		std::cout << name << std::endl;
	}

private:
	std::string name;
};

int main()
{
	std::unique_ptr<YhLight[]> yhlights(new YhLight[2]{ YhLight("荧火light1"), YhLight("荧火light2") });
	yhlights[0].print();
	yhlights[1].print();
	return 0;
}
```

#### shared_ptr
##### shared_ptr的创建与使用
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name = "荧火light", const int& age = 18) : name(name), age(age) {};

	void print()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

int main()
{
	// shared_ptr 共享智能指针
	// 共享智能指针允许多个指针指向同一块内存，其内部使用计数器机制记录指向此块内存的共享智能指针数量
	// 当计数器为0时，意味着没有任何共享智能指针指向此内存，此时将释放此块内存

	// make_shared()函数于C++ 11中引入，常使用此函数创建共享智能指针
	std::shared_ptr<YhLight> yhlight = std::make_shared<YhLight>("荧火light", 18);

	// shared_ptr 共享智能指针与 unique_ptr 独享智能指针一样，其构造器由explicit修饰，禁止隐式类型转换
	// 但shared_ptr没有删除拷贝构造函数与赋值运算符

	// 拷贝构造函数
	std::shared_ptr<YhLight> yhlight2(yhlight);

	// 赋值操作符
	std::shared_ptr<YhLight> yhlight3 = yhlight;

	// 使用use_count()函数获取引用计数
	std::cout << yhlight.use_count() << std::endl;

	yhlight->print();
	return 0;
}
```

#### 智能指针删除器
```cpp
#include <iostream>
#include <memory>

class YhLight
{
public:
	YhLight(const std::string& name = "荧火light", const int& age = 18) : name(name), age(age) {};

	void to_print()
	{
		std::cout << name << " " << age << std::endl;
	}

private:
	std::string name;
	int age;
};

void deletefunc(const YhLight* yhlight)
{
	std::cout << "自定义删除器(全局函数)" << std::endl;
	delete yhlight;
}

class deleteClass
{
	void operator()(const YhLight* yhlight)
	{
		std::cout << "自定义删除器(仿函数)" << std::endl;
		delete yhlight;
	}
};

auto deletefunc_lambda = [](const YhLight* yhlight)
	{
		std::cout << "自定义删除器(lambda)" << std::endl;
		delete yhlight;
	};

int main()
{
	std::shared_ptr<YhLight> yhlight(new YhLight(), deletefunc);
	return 0;
}
```

#### weak_ptr
```cpp
#include <iostream>
#include <memory>

class Shuiyang;

class YhLight
{
public:

	YhLight()
	{
		std::cout << "YhLight构造函数" << std::endl;
	}

	~YhLight()
	{
		std::cout << "YhLight析构函数" << std::endl;
	}

	// std::shared_ptr<Shuiyang> shuiyang;
	std::weak_ptr<Shuiyang> shuiyang;

	// 在此处解析为什么会引发循环利用问题
	// 销毁YhLight对象时，需要先销毁内部的Shuiyang对象，而销毁Shuiyang对象则需要先销毁内部的YhLight对象
	// 因此，YhLight对象与Shuiyang对象相互引用，导致无法被销毁
};

class Shuiyang
{
public:
	Shuiyang()
	{
		std::cout << "Shuiyang构造函数" << std::endl;
	}

	~Shuiyang()
	{
		std::cout << "Shuiyang析构函数" << std::endl;
	}

	// std::shared_ptr<YhLight> yhlight;
	std::weak_ptr<YhLight> yhlight;
};

int main()
{
	std::shared_ptr<YhLight> yhlight = std::make_shared<YhLight>();
	std::shared_ptr<Shuiyang> shuiyang = std::make_shared<Shuiyang>();

	std::cout << yhlight.use_count() << std::endl;
	std::cout << shuiyang.use_count() << std::endl;

	// shared_ptr可能会因为循环利用而导致计数器无法归零，导致内存无法被释放，造成内存泄露
	// 为了解决此问题，C++引入了weak_ptr 弱智能指针，weak_ptr与shared_ptr搭配使用，是shared_ptr的补充而非替代
	yhlight->shuiyang = shuiyang;
	shuiyang->yhlight = yhlight;

	// weak_ptr能够与shared_ptr进行相互转换，且不会增加原有shared_ptr的计数器
	std::cout << yhlight.use_count() << std::endl;
	std::cout << shuiyang.use_count() << std::endl;

	// weak_ptr没有重载->与*操作符，不能访问资源
	// weak_ptr重载了=操作符，可以接收shared_ptr对象创建对象
	std::weak_ptr<YhLight> w_yhlight = yhlight;
	// w_yhlight->shuiyang = shuiyang;  // 错误

	// expired()函数用于判断资源是否已被销毁
	if (w_yhlight.expired())
		std::cout << "资源已被销毁" << std::endl;

	// lock()函数用于返回shared_ptr对象
	std::shared_ptr<YhLight> s_yhlight = w_yhlight.lock();

	// reset()函数用于置空weak_ptr
	w_yhlight.reset();
	if (w_yhlight.expired())
		std::cout << "资源已被销毁" << std::endl;
	return 0;
}
```

### 类型转换
#### dynamic_cast
```cpp
#include <iostream>

class YhLight
{
public:
	// 必须存在虚函数，否则基类不是多态类
	virtual void test() {}
};

class Shuiyang : public YhLight
{
public:
	void test() {}
};

int main()
{
	// dynamic_cast 动态转换
	// 动态转换仅适用于转换对象的指针或引用
	// dynamic_cast主要用于父类指针 / 引用转换为子类指针 / 引用
	// 或者子类之间相互进行转换

	// 指针
	// 在编译阶段，dynamic_cast会检查需要转换的指针 / 引用的类型是否具有多态性
	// 如果类型不具有多态类，则说明需要转换的指针 / 引用与目标类型不构成继承关系，类型不兼容，将提示无法进行转换

	YhLight* yhlight = new YhLight();
	Shuiyang* shuiyang = dynamic_cast<Shuiyang*>(yhlight);
	if (shuiyang == nullptr)
		std::cout << "转换失败" << std::endl;
	else
		std::cout << "转换成功" << std::endl;

	// 在运行阶段，dynamic_cast会检查需要转换的指针 / 引用的类型是否指向目标类型
	// 如果需要转换的指针 / 引用没有指向目标类型，则内部没有目标类型的内存布局，无法进行转换

	YhLight* yhlight2 = new Shuiyang();
	Shuiyang* shuiyang2 = dynamic_cast<Shuiyang*>(yhlight2);
	if (shuiyang2 == nullptr)
		std::cout << "转换失败" << std::endl;
	else
		std::cout << "转换成功" << std::endl;

	delete yhlight;
	delete yhlight2;
	return 0;
}
```

#### static_cast
```cpp
#include <iostream>

class YhLight
{

};

class Shuiyang : public YhLight
{

};

int main()
{
	// static_cast 静态转换
	// 与dynamic_cast 动态转换的区别在于，static_cast 静态转换只在编译阶段进行类型检查
	// static_cast不要求需要转换的指针 / 引用的类型具有多态性，只需要与目标类型相互兼容即可
	// static_cast常用于向上转型与向下降级

	// 向上转型
	Shuiyang* shuiyang = new Shuiyang();
	YhLight* yhlight = static_cast<YhLight*>(shuiyang);

	// 向下降级
	YhLight* yhlight2 = new YhLight();
	Shuiyang* shuiyang2 = static_cast<Shuiyang*>(yhlight2);

	// 所有的隐式类型转换皆可以使用static_cast进行替换，相较于直接的强制类型转换，static_cast更为安全，但会消耗一定的性能
	delete shuiyang;
	delete yhlight2;
	return 0;
}
```

#### reinterpret_cast
```cpp
#include <iostream>

class YhLight
{

};

class Shuiyang : public YhLight
{

};

class Huanlaiting
{

};

int main()
{
	// reinterpret_cast 重解释转换
	// reinterpret_cast 重解释转换可以将一个类的指针 / 引用转换成另一个类的指针 / 引用
	// 除此之外，还能将指针转换为整数，整数转换成指针

	YhLight* yhlight = new YhLight();
	Shuiyang* shuiyang = reinterpret_cast<Shuiyang*>(yhlight);
	Huanlaiting* huanlaiting = reinterpret_cast<Huanlaiting*>(yhlight);

	long long ptr_long = reinterpret_cast<long long>(yhlight);
	std::cout << ptr_long << std::endl;
	YhLight* yhlight2 = reinterpret_cast<YhLight*>(ptr_long);

	delete yhlight;
	return 0;
}
```

#### const_cast
```cpp
#include <iostream>

int main()
{
	// const_cast 常量转换
	// 用于将常量指针 / 引用 转换为非常量指针 / 引用

	int num = 100;
	const int* const ptr_num = &num;
	int* unlock_ptr = const_cast<int*>(ptr_num);
	*unlock_ptr = 40;
	std::cout << num << std::endl;

	int new_num = 200;
	unlock_ptr = &new_num;
	std::cout << *unlock_ptr << std::endl;
	return 0;
}
```

### C++扩展
#### length()函数的实现
#### move()函数的实现