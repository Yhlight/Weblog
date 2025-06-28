## 选择结构
用以进行判断的结构  

### if语句
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

#### 省略大括号的if语句
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

### switch语句
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

## 循环结构
用以重复执行操作的结构  

### while循环
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

#### 省略大括号的while循环
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

### for循环
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

#### 省略大括号的for循环
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

### do...while循环
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

#### 省略大括号的do...while循环
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

## 跳转语句
### goto语句
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