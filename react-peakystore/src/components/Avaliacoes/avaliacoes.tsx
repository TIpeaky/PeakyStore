
import React from 'react'
import {useState} from 'react'
import {Rating, Box} from "@mui/material";
import {Star} from"@mui/icons-material";
import styles from './Avaliacoes.module.scss'

const Avaliacoes = () => {
    const labels: {[index:string]: string} = {
        0.5: 'Muito ruim',
        1: 'Razoável',
        2: 'Bom',
        3: 'Muito bom'

    }

    const [value,setValue] = useState<number | null>(2)
        const[hover, setHover] = useState(-1)

  return (
    <div className={styles.container_evaluation}>
        <h1>Avaliacoes</h1>
        <div className={styles.container_stars}>
            <Box
             sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
            }}

            >
                <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange= {(event, newValue)=>{
                    setValue(newValue)
                }}

                onChangeActive = {(event, newHover)=>{
                    setHover(newHover)
                }}

                emptyIcon = {<Star style={{opacity:0.5}} fontSize="inherit"/>}
            />
            </Box>
            </div>
        <img></img>

        <p>Gostei muito do tecido, me senti confortável em usar tanto para sair, tanto para realizar pequenas atividades físicas!</p>
    </div>
  )
}
export default Avaliacoes