import React from 'react'
import style from './style.module.css'
import { useState } from 'react'

export default function Gradient() {

	
	const [color1,setColor1] = useState('#6C4DF5')//color 1 默认颜色
	const [color2,setColor2] = useState('#E6483E')//color 2 默认颜色


	//获取 input 的值并改变颜色的方法
	function handleInputChangeColor(e){
		//🔥🔥🔥解构赋值出 input 内的值,很关键！
		const {name,value} = e.target
		if(name === 'color1'){
			setColor1(value)
		}
		if(name === 'color2'){
			setColor2(value)
		}
	}


	//重置颜色的方法
	function handleResetColor(){
		setColor1('#6C4DF5')
		setColor2('#E6483E')
	}



	return (
		<div 
		// 背景色
		className={style.container}
		style={{background: `linear-gradient(75deg,${color1},${color2})`}}
		>
			<div className={style.pop}>
				<div className={style.inputGroup}>
					<label>请选择第一个颜色</label>
					<input 
						value={color1} //默认值
						type="color"
						name='color1' 
						className={style.inputColor}
						onChange={handleInputChangeColor}//添加颜色改变后触发这个事件函数（写法一-普通函数的写法）
						/>

				</div>
				<div className={style.inputGroup}>
					<label>请选择第二个颜色</label>
					<input 
						value={color2} //默认值
						type="color" 
						name='color2' 
						className={style.inputColor}
						onChange={e => setColor2(e.target.value)}//添加颜色改变后触发这个事件函数（写法二-箭头函数的写法）
						/>
				</div>
				
				{/* 方法一 
				<button 
					className={style.button}
					onClick={handleResetColor}
					>重置为默认颜色</button>*/}

				{/* 方法二(箭头函数的写法) */}
				<button 
					className={style.button}
					onClick={()=>{
						setColor1('#6C4DF5');
						setColor2('#E6483E');
					}}
					>重置为默认颜色</button>
			</div>
		</div>
	)
}
