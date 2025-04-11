# IS-tip-calculator
Calculadora de gorjeta com base na qualidade do atendimento

É um projeto bem simples, focado apenas no atendimento a uma demanda de atividade.

Foi utilizada uma classe para criação do valor da gorjeta e para retorno da porcentagem da mesma. Consultei o ChatGpt para buscar um padrão médio de custo de gorjeta, o qual deveria ser cobrado de acordo com a qualidade do atendimento, o mesmo me forneceu o padrão 20%, 10% e 5%.

Classe tip - Foi utilizada para construção do valor da gorjeta, a mesma utiliza de dois "constructors" qualidade e total, recebendo a qualidade do serviço e o valor total da conta, respectivamente.
Método calc_porcentagem - O método, foi criado para retornar o valor da gorjeta, utilizando a famosa regra de três que resolve todas as coisas. O método recebe o valor da porcentagem da gorjeta, utilizando do this.total para calcular o valor da mesma.
Método calc_tip - Basicamente o método executa uma condicional, a qual chama o método calc_porcentagem para realizar o cálculo baseado no parâmetro da qualidade do serviço.

Foi utilizado um eventListener, para escutar os clicks realizados na página.

Caso o elemento selecionado na página contenha a classe "calculate_tip" ele executa um prevent.default() para realizar o cálculo do desconto.
A condicional, a qual confirma o elemento pressionado, também confirma que os campos "valorTotal" e o "radio" possuem valor atribuído, caso os mesmos não tenham valor atribuído o programa retorna undefined. Caso os campos possuam valor atribuído eles criam um elemento contendo a classe tip, criar uma tag p e incluem o valor do resultado na mesma, a qual estará contidad entro de uma div com calsse "va


