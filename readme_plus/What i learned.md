### Next.js

**✅ json 파일 읽어오기**

```react
const conceptList = require('../../../public/data/concept.json')
```

`require` 을 사용하여 간단하게 사용할 수 있다. `parse` 안해도 바로 object 형태로 사용이 가능하다. 



**✅ `className` 여러개 사용하는 방법**

```react
import classNames from 'classnames';
...
className={classNames({[styles.conceptitem]: true, [styles.active]: selectedItem === item})}
```

`react`에서는 공백으로 띄워서 여러개를 사용할 수 있지만, `next.js` 는 지원되지 않는다. 좀 괴상해보이는 모습이지만, 위 처럼 사용하면 조건부 스타일링이 가능하다.



**✅ 함수형 컴포넌트에는 이벤트 함수를 사용할 수 없다.**

**❌ Bad**

```react
<ConceptItem selectedItem={selectedItem} onclick={() => clickItem()} item={ele} key={ ele.title }/>
```

**🟢 Good**

```react
<ConceptItem selectedItem={selectedItem} clickItem={clickItem} item={ele} key={ ele.title }/> // 부모
...
<div onClick={() => clickItem(item)}></div> // 자식
```

컴포넌트에 `onclickItem` 을 사용하면, 이를 `props` 로 인식한다. 이벤트 함수를 사용하기 위해서는 전체를 `div` 등의 html 태그로 묶거나, 자식 컴포넌트에 함수 자체를 `props` 내려서 사용해야 한다.