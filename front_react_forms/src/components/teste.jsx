import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function teste() {


    function enois() {
        alert(" O Mundo não e um Morango")
    }
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Envie um email pra Gente
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">

                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body">



                            <form
                                className="needs-validation"
                                novalidate
                    
                            >
                                <div className="form-row">
                                    <div className="">
                                        <label htmlFor="validationCustom01">Primeiro nome</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            placeholder="Nome"
                                            // ref={inputName}  Usa o ref para capturar o valor
                                            required
                                        />
                                        <div className="valid-feedback">Tudo certo!</div>
                                    </div>
                                    <div className="col-md-4 mb-3">

                                        <label htmlFor="validationCustom02">Idade</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Idade"
                                            //ref={inputAge} // Usa o ref para capturar o valor
                                            required
                                        />
                                        <div className="valid-feedback">Tudo certo!</div>
                                    </div>
                                    <div className="">
                                        <label htmlFor="validationCustomUsername">E-mail</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                placeholder="E-mail"
                                                //  ref={inputEmail} // Usa o ref para capturar o valor
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, insira um e-mail válido.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="invalidCheck"
                                            required
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="invalidCheck"
                                        >
                                            Concordo com os termos e condições
                                        </label>
                                        <div className="invalid-feedback">
                                            Você deve concordar, antes de continuar.
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="submit">
                                    Enviar
                                </button>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={enois} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default teste