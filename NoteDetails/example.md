## 窗口类连接
使用QObject类提供的静态函数connect来连接信号与槽  
QObject::connect(const QObject *sender, const QMetaMethod &signal, const QObject *receiver, const QMetaMethod &method, Qt::ConnectionType type = Qt::AutoConnection)
形参1  ->  发送信号的对象  
形参2  ->  引用信号函数  
形参3  ->  信号的接收者  
形参4  ->  引用槽函数  
```cpp
#include "helloworld.h"

#include <QApplication>
#include <QPushButton>
#include <QBoxLayout>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    HelloWorld w;

    QPushButton *button = new QPushButton();
    button->setText("Click Me!!!");

    QBoxLayout *layout = new QHBoxLayout();
    layout->addWidget(button);

    // 实际没有使用到我们自定义的信号
    QObject::connect(button, &QPushButton::clicked, &w, &HelloWorld::clickButtonSlot);

    w.setLayout(layout);
    w.setMinimumSize(800, 600);
    w.show();
    return a.exec();
}
```

## 信号与槽机制
如果想要点击按钮时触发一些事件，则需要借助Qt中的信号与槽机制，信号与槽是实现交互的基础  
开发者需要定义信号与槽，并将信号与槽进行连接，再发送信号至槽，调用槽函数，如按钮的点击事件  
信号与槽的使用需要包括头文件<QObject>，需要引入模块  
```
find_package(Qt6 REQUIRED COMPONENTS Core)
target_link_libraries(mytarget PRIVATE Qt6::Core)
```