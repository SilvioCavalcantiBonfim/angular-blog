CREATE DATABASE IF NOT EXISTS blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE blog;

CREATE TABLE `Setting` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `carousel_time` INTEGER NOT NULL,
    `carousel_amount` INTEGER NOT NULL,
    `theme_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theme` (
    `id` VARCHAR(191) NOT NULL,
    `color1` VARCHAR(191) NOT NULL,
    `color2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `thumb` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `article_id` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Setting` ADD CONSTRAINT `Setting_theme_id_fkey` FOREIGN KEY (`theme_id`) REFERENCES `Theme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

INSERT INTO `Setting` (`id`, `title`, `subtitle`, `carousel_time`, `carousel_amount`, `theme_id`) VALUES
('19c01481-1fec-11ee-b910-0242ac120002',	'Blog',	'',	5000,	3,	'f830a30a-1fea-11ee-b1dc-0242ac120002');

INSERT INTO `Theme` (`id`, `color1`, `color2`) VALUES
('4ca0d182-1fea-11ee-b1dc-0242ac120002',	'#f12711',	'#f5af19'),
('5102070e-1feb-11ee-b1dc-0242ac120002',	'#f59e0b',	'#d27deb'),
('68f465e2-1fea-11ee-b1dc-0242ac120002',	'#6f11a3',	'#f30284'),
('773d8d3d-1fea-11ee-b1dc-0242ac120002',	'#aee958',	'#4fbc6e'),
('82f49b10-1fea-11ee-b1dc-0242ac120002',	'#7fe8bc',	'#516ab8'),
('f830a30a-1fea-11ee-b1dc-0242ac120002',	'#a855f7',	'#ec4899');

INSERT INTO `User` (`id`, `full_name`, `password`, `email`) VALUES
('b9ed6d89-c808-4180-9019-285d34213e9d', 'Admin', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'admin@blog.com');

INSERT INTO `Article` (`id`, `title`, `content`, `author_id`, `created_at`, `updated_at`, `thumb`) VALUES
('0c704389-45a4-448a-a2ff-f2a9362051ac',	'A Importância da Autodisciplina na Busca pelo Sucesso',	'<p><strong>Introdução</strong></p><p>A autodisciplina é uma das qualidades mais poderosas que podemos cultivar em nós mesmos. Ela desempenha um papel fundamental em nossa capacidade de alcançar o sucesso e atingir nossos objetivos, sejam eles pessoais ou profissionais. Neste artigo, exploraremos a importância da autodisciplina e como ela pode ser desenvolvida para impulsionar nosso crescimento e realização.</p><p><strong>Desenvolvendo a autodisciplina</strong></p><p>A autodisciplina envolve a capacidade de controlar nossos pensamentos, emoções e ações, mesmo quando enfrentamos desafios e obstáculos. É uma habilidade que pode ser aprendida e aprimorada com prática e determinação. Para desenvolver a autodisciplina, é essencial estabelecer metas claras e realistas, criar rotinas e hábitos positivos, manter o foco em longo prazo e cultivar a mentalidade de perseverança.</p><p><strong>Benefícios da autodisciplina</strong></p><p>A autodisciplina traz uma série de benefícios significativos para nossas vidas. Ela nos permite ter controle sobre nossas escolhas e ações, aumenta nossa produtividade e eficiência, fortalece nossa resiliência e determinação, melhora nossa saúde física e mental e nos ajuda a construir relacionamentos saudáveis e duradouros. Além disso, a autodisciplina nos ajuda a superar a procrastinação, o autoquestionamento e a falta de motivação, permitindo que avancemos em direção aos nossos objetivos com confiança.</p><p><strong>Aplicando a autodisciplina na vida diária</strong></p><p>A autodisciplina não se trata apenas de grandes esforços ou momentos pontuais, mas também de pequenas escolhas diárias. É necessário desenvolver a capacidade de resistir às tentações imediatas em prol de recompensas a longo prazo. Isso inclui criar uma rotina matinal consistente, estabelecer prazos realistas, adotar uma abordagem focada e disciplinada em relação ao trabalho e cultivar o equilíbrio entre trabalho, descanso e lazer.</p><p><strong>Inspiração de histórias de sucesso</strong></p><p>Numerosas histórias de sucesso são marcadas pela presença de autodisciplina. Grandes líderes, atletas, artistas e empreendedores alcançaram suas conquistas notáveis através do compromisso com a autodisciplina. Por exemplo, o lendário jogador de basquete Michael Jordan treinava intensamente todos os dias, mesmo quando já era considerado o melhor do mundo em sua área. Esses exemplos nos inspiram e nos mostram que a autodisciplina é um fator crucial na busca pelo sucesso.</p><p><strong>Conclusão</strong></p><p>A autodisciplina é uma habilidade poderosa que nos impulsiona em direção ao sucesso e ao alcance de nossos objetivos. Ela requer esforço e dedicação, mas os benefícios são inegáveis. Ao desenvolver a autodisciplina em nossas vidas diárias, podemos aumentar nossa produtividade, superar obstáculos e alcançar resultados significativos. Portanto, comprometa-se em cultivar a autodisciplina em sua jornada e abra as portas para um futuro brilhante e repleto de realizações.</p><p>Espero que esse exemplo tenha lhe fornecido uma ideia de como escrever um artigo para um blog. Você pode adaptar o tema e o conteúdo de acordo com suas preferências e público-alvo. Lembre-se de adicionar suas próprias ideias e perspectivas ao escrever o artigo.</p>',	'b9ed6d89-c808-4180-9019-285d34213e9d',	'2023-07-10 23:24:19.909',	'2023-07-10 23:24:19.909',	'https://i.pinimg.com/564x/03/f4/72/03f472c5bc50955a63ba922ffa29b844.jpg'),
('5fb8e3dc-453b-4391-99d5-a270aaba3570',	'A Importância da Resiliência: Como Lidar com Desafios e Superar Obstáculos',	'<p><strong>Introdução</strong></p><p>No mundo acelerado e complexo em que vivemos, enfrentamos uma série de desafios e obstáculos em nossa jornada pessoal e profissional. No entanto, o que realmente importa não é a quantidade de dificuldades que encontramos, mas como lidamos com elas. A resiliência, habilidade de se adaptar e se recuperar diante das adversidades, desempenha um papel fundamental para alcançar o sucesso e a satisfação em nossas vidas. Neste artigo, vamos explorar a importância da resiliência e fornecer algumas estratégias práticas para desenvolvê-la.</p><ol><li><p><strong>Compreendendo a resiliência</strong></p><ul><li><p>Definição de resiliência e sua relevância em diferentes áreas da vida.</p></li><li><p>Os benefícios de ser resiliente: maior capacidade de lidar com estresse, resistência emocional e crescimento pessoal.</p></li></ul></li><li><p><strong>Desenvolvendo a resiliência</strong></p><ul><li><p>Fortalecendo a mentalidade resiliente: cultivando pensamentos positivos, otimismo realista e autoconfiança.</p></li><li><p>Adaptabilidade: aprendendo a se ajustar às mudanças e encontrar oportunidades em situações desafiadoras.</p></li><li><p>Estabelecendo redes de apoio: buscando suporte social e construindo relacionamentos saudáveis.</p></li><li><p>Gerenciamento do estresse: desenvolvendo habilidades de autorregulação emocional e práticas de autocuidado.</p></li></ul></li><li><p><strong>Superando obstáculos com resiliência</strong></p><ul><li><p>Transformando falhas em oportunidades de aprendizado: adotando uma mentalidade de crescimento e buscando soluções criativas.</p></li><li><p>Enfrentando a adversidade: lidando com situações difíceis e desenvolvendo habilidades de solução de problemas.</p></li><li><p>Mantendo o equilíbrio: encontrando um equilíbrio saudável entre trabalho, vida pessoal e autocuidado.</p></li></ul></li><li><p><strong>Exemplos inspiradores de resiliência</strong></p><ul><li><p>Histórias de pessoas famosas que superaram grandes desafios e alcançaram o sucesso.</p></li><li><p>Casos de estudo de organizações resilientes que se adaptaram às mudanças do mercado e prosperaram.</p></li></ul></li></ol><p><strong>Conclusão</strong></p><p>A resiliência é uma habilidade valiosa que pode ser desenvolvida e fortalecida ao longo do tempo. Ao adotar uma mentalidade resiliente e aplicar estratégias práticas, podemos enfrentar os desafios com confiança, aprender com as adversidades e crescer como indivíduos. A resiliência nos capacita a superar obstáculos e construir uma vida mais gratificante e bem-sucedida. Portanto, é essencial investir em nosso próprio desenvolvimento resiliente para enfrentar os desafios que surgem em nosso caminho e aproveitar ao máximo nossas experiências de vida.</p>',	'b9ed6d89-c808-4180-9019-285d34213e9d',	'2023-07-10 23:41:09.781',	'2023-07-10 23:41:09.781',	'https://i.pinimg.com/564x/c2/51/b3/c251b3c052e0747484e6a5637bd75324.jpg'),
('8ad5759d-e6a5-4d73-a5fa-6769ad3105ad',	'Descobrindo a Magia da Fotografia: Um Guia para Iniciantes',	'Introdução:Aprenda os fundamentos da fotografia, dicas e técnicas para aprimorar suas habilidades e criar imagens que transmitam emoções e contem histórias. Explore o poder da luz, a arte da composição, as configurações da câmera e a captura de momentos significativos. Seja bem-vindo a este blog introdutório sobre a magia da fotografia!Capítulo 1: A importância da luz na fotografiaDescubra como aproveitar diferentes tipos de luz para criar efeitos impressionantes.Capítulo 2: Composição e enquadramentoAprenda a organizar elementos em suas fotos para criar composições atraentes.Capítulo 3: Dominando as configurações da câmeraDesvende as configurações essenciais da câmera para obter o máximo de suas imagens.Capítulo 4: Capturando emoções e contando históriasExplore técnicas para transmitir narrativas visuais poderosas em suas fotografias.Conclusão:A jornada para se tornar um fotógrafo talentoso começa aqui. Pratique, experimente e descubra a magia por trás de cada clique.Prepare sua câmera, abra sua mente e comece a capturar momentos incríveis.',	'b9ed6d89-c808-4180-9019-285d34213e9d',	'2023-07-11 00:40:03.268',	'2023-07-11 00:40:03.268',	'https://i.pinimg.com/564x/55/c8/5b/55c85be926efc0b1a90f64d607d3ec8e.jpg'),
('b9ed6d89-c808-4180-9019-285d34213e9d',	'A Importância da Programação: Desvendando o Poder da Era Digital',	'<p><strong>Introdução</strong><br>Vivemos na era digital, onde a tecnologia desempenha um papel fundamental em quase todas as esferas da nossa vida. Por trás dessa tecnologia, existe uma habilidade essencial que impulsiona a inovação e a criação de soluções para os desafios do mundo moderno: a programação. Neste artigo, exploraremos a importância da programação e como ela está transformando nossa sociedade. Descubra como essa habilidade se tornou fundamental para prosperar em uma era cada vez mais digitalizada.</p><ol><li><p>1. A era digital e sua influência:</p><ul><li><p>Como a tecnologia permeia todos os aspectos de nossa vida cotidiana.</p></li><li><p>O papel da programação na criação de aplicativos, sites, jogos e outros produtos digitais.</p></li></ul></li><li><p>2. Ampliando as fronteiras da criatividade:</p><ul><li><p>Como a programação permite transformar ideias em realidade.</p></li><li><p>O poder da codificação no desenvolvimento de projetos inovadores.</p></li></ul></li><li><p>3. Estimulando o pensamento crítico e a resolução de problemas:</p><ul><li><p>A programação como uma ferramenta para desenvolver habilidades analíticas.</p></li><li><p>Como os programadores enfrentam desafios complexos e encontram soluções criativas.</p></li></ul></li><li><p>4. Impulsionando a empregabilidade:</p><ul><li><p>A demanda crescente por profissionais de programação em todos os setores.</p></li><li><p>Como a habilidade de programação abre portas para carreiras promissoras e bem remuneradas.</p></li></ul></li><li><p>5. Promovendo a inclusão digital:</p><ul><li><p>O papel da programação na redução da divisão digital.</p></li><li><p>Iniciativas para tornar a programação mais acessível e inclusiva.</p></li></ul></li><li><p>6. Preparando as próximas gerações:</p><ul><li><p>A importância da educação em programação desde cedo.</p></li><li><p>Iniciativas e recursos disponíveis para incentivar jovens a aprenderem a programar.</p></li></ul></li></ol><p><strong>Conclusão</strong></p><p>A programação desempenha um papel vital em nossa sociedade digitalizada. Ela permite a criação de soluções inovadoras, impulsiona o pensamento crítico e a resolução de problemas, amplia as oportunidades de emprego e promove a inclusão digital. Aprender a programar não é apenas sobre escrever código, mas sim sobre desenvolver habilidades essenciais para prosperar na era digital em constante evolução. Portanto, é hora de reconhecer a importância da programação e aproveitar seu poder para moldar nosso futuro. Seja você um estudante, profissional ou entusiasta da tecnologia, mergulhe nessa jornada e desvende todo o potencial que a programação tem a oferecer.</p>',	'b9ed6d89-c808-4180-9019-285d34213e9d',	'2023-07-07 00:40:23.021',	'2023-07-11 00:08:17.369',	'https://i.pinimg.com/564x/2c/66/a7/2c66a7c617b834535487fbc24a7c3d82.jpg'),
('c3be6e01-af92-461c-9c1a-74e8f5c3d347',	'O que é um Blog e como ele pode impactar sua presença online',	'<p><strong>Introdução</strong></p><p>Nos dias de hoje, a presença online é essencial para indivíduos e empresas que desejam se conectar com seu público-alvo e expandir seu alcance. Nesse contexto, os blogs se tornaram uma ferramenta poderosa para compartilhar conhecimento, expressar ideias e construir uma presença online significativa. Neste artigo, vamos explorar o que é um blog e como ele pode impactar sua presença online de maneiras positivas e significativas.</p><ol><li><p><u>O que é um blog?</u></p><ul><li><p>Definição de blog e sua evolução ao longo do tempo.</p></li><li><p>Diferença entre um blog e um site tradicional.</p></li></ul></li><li><p><u>Benefícios de ter um blog:</u></p><ul><li><p>Estabelecendo autoridade e expertise: compartilhando conhecimentos e experiências.</p></li><li><p>Construindo relacionamentos com o público: interagindo por meio de comentários e feedback.</p></li><li><p>Atraindo tráfego orgânico: melhorando o SEO e alcançando um público mais amplo.</p></li><li><p>Criando oportunidades de monetização: gerando receita por meio de parcerias e publicidade.</p></li></ul></li><li><p><u>Como um blog pode impactar sua presença online:</u></p><ul><li><p>Aumento da visibilidade: alcançando uma audiência global e construindo uma comunidade.</p></li><li><p>Fortalecimento da marca pessoal ou empresarial: transmitindo valores, missão e identidade.</p></li><li><p>Geração de leads e conversões: capturando informações de contato e convertendo visitantes em clientes.</p></li><li><p>Posicionamento como referência no mercado: estabelecendo-se como uma fonte confiável de informações.</p></li></ul></li><li><p><u>Dicas para um blog de sucesso:</u></p><ul><li><p>Definindo um nicho ou tema específico.</p></li><li><p>Criando conteúdo relevante e envolvente.</p></li><li><p>Mantendo uma consistência de publicação.</p></li><li><p>Promovendo seu blog por meio das redes sociais e marketing de conteúdo.</p></li></ul></li><li><p><u>Ferramentas e plataformas para criar um blog:</u></p><ul><li><p>Opções populares de plataformas de blogging, como WordPress, Blogger e Medium.</p></li><li><p>Recursos e plugins úteis para melhorar a funcionalidade e o design do seu blog.</p></li></ul></li></ol><p><strong>Conclusão</strong></p><p>Um blog pode ser uma ferramenta poderosa para impactar sua presença online, permitindo que você compartilhe suas paixões, conhecimentos e ideias com o mundo. Com um blog bem planejado e executado, você pode estabelecer autoridade, expandir sua rede de contatos, atrair tráfego orgânico e fortalecer sua marca pessoal ou empresarial. Portanto, se você está buscando construir uma presença online significativa, considere iniciar um blog e aproveitar todos os benefícios que ele pode oferecer. Lembre-se de focar na qualidade do conteúdo, promover seu blog ativamente e manter a consistência na publicação. Com dedicação e estratégia, seu blog pode se tornar uma poderosa ferramenta de comunicação e crescimento online.</p>',	'b9ed6d89-c808-4180-9019-285d34213e9d',	'2023-07-06 21:00:25.175',	'2023-07-11 00:09:54.491',	'https://i.pinimg.com/564x/50/e6/bc/50e6bc733c4a003745cdf18ac262b6fd.jpg');

INSERT INTO `Comment` (`id`, `article_id`, `content`, `author`, `created_at`) VALUES
('a636e56e-476a-462a-a46b-2bf912700b0c',	'c3be6e01-af92-461c-9c1a-74e8f5c3d347',	'Ótimo artigo! Explicou claramente o que é um blog e seu impacto na presença online. Destacou benefícios, dicas e ferramentas úteis. Recurso valioso para construir presença online. Parabéns!',	'ChatGPT',	'2023-07-11 00:13:45.200');