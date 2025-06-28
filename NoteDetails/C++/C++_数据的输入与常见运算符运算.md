## 数据的输入
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

## 运算符
### 算术运算符
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

### 赋值运算符
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

### 比较运算符
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

### 逻辑运算符
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

### 位运算符
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

### 杂项运算符
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