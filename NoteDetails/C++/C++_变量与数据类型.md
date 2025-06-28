## 变量
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

## 常量
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

## 基本数据类型
### 整型
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

### sizeof()
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

### 浮点型
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

### 字符型
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

### 字符串
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

### 布尔类型
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