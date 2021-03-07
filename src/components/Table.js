import styles from '../styles/components/Table.module.css'

export default function Table() {

    return (
        <div className={styles.container}>
            <table>
                <tr>
                    <th>Peça</th>
                    <th>Camada(<i>u</i>)</th>
                    <th>Descrição</th>
                    <th>Avaliação final</th>
                </tr>
                <tr>
                    <td>Capô</td>
                    <td>
                        <p htmlFor="min">min: <input id="min1" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max1" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint1" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                        <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Paralama D. Direito</td>
                    <td>
                        <p htmlFor="min">min: <input id="min2" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max2" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint2" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Porta D. Direita</td>
                    <td>
                        <p htmlFor="min">min: <input id="min3" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max3" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint3" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Porta T. Direita</td>
                    <td>
                        <p htmlFor="min">min: <input id="min4" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max4" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint4" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Lateral T. Direita</td>
                    <td>
                        <p htmlFor="min">min: <input id="min5" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max5" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint5" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Tampa Traseira</td>
                    <td>
                        <p htmlFor="min">min: <input id="min6" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max6" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint6" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Lateral T. Esquerda</td>
                    <td>
                        <p htmlFor="min">min: <input id="min7" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max7" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint7" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Porta T. Esquerda</td>
                    <td>
                        <p htmlFor="min">min: <input id="min8" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max8" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint8" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Porta D. Esquerda</td>
                    <td>
                        <p htmlFor="min">min: <input id="min9" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max9" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint9" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Paralama D. Esquerda</td>
                    <td>
                        <p htmlFor="min">min: <input id="min11" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max11" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint11" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
                <tr>
                    <td>Teto</td>
                    <td>
                        <p htmlFor="min">min: <input id="min12" name="min" type="number" /></p>
                        <p htmlFor="max">max: <input id="max12" name="max" type="number" /></p>
                    </td>
                    <td>
                        <label htmlFor="paint">Condição da peça: </label>
                        <select id="paint12" name="paint">
                            <option value="select">Selecione</option>
                            <option value="Pintura ok">Pintura ok</option>
                            <option value="Peça com Repintura">Peça com Repintura</option>
                            <option value="Peça com massa plástica">Peça com massa plástica</option>
                            <option value="Peça com pintura queimada">Peça com pintura queimada</option>
                        </select>
                    </td>
                    <td>
                    <textarea
                            wrap="hard"
                            cols="22"
                            rows="3"
                            type="text"
                            placeholder="Pintura ok" />
                    </td>
                </tr>
            </table>
            <footer>
                <blockquote>
                    <cite><i>Dev Ricardo Pouza</i></cite>
                </blockquote>
            </footer>
        </div>
    )
}