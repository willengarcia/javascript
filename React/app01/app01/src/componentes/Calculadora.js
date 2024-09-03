import React, { useEffect } from "react";

export default function Calculadora(){

    return(
        <div className="calculadora">
            <p>Calculadora Matemática Simples</p>
            <div className="resultado"></div>
            <div className="numeros">
                <table>
                    <tr>
                        <td>AC</td>
                        <td>(</td>
                        <td>)</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>*</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>.</td>
                        <td>&lt;</td>
                        <td>=</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}