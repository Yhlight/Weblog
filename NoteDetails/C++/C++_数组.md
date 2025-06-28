## 数组
### 一维数组
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

### 二维数组
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