//Day 1

function untangle(str) {
    const values = {
        '0': 'O',
        '1': 'I',
        '2': 'Z',
        '3': 'E',
        '4': 'h',
        '5': 'S',
        '6': 'G',
        '7': 'L',
        '8': 'B',
        '9': 'q',
    }
    let res = str.split('').map(el => {
        if(values[el]) {
            return values[el]
        }else if(Object.values(values).includes(el)) {
            return Object.keys(values).find(key => values[key] === el)
        }else {
            return el
        }
    }).join('')
    return res
}

console.log(untangle('PR0-T1P #hqB: 1T\'5 N1C3 T0 5AY H3770'))

//Day 2

function cleanup(str) {
    //remove all before 'c'
    let cIndex = str.split('').findIndex(el => el === 'c')
    let strNoC = str.slice(cIndex+1)
    
    //remove all Eek!
    let eekLessStr = strNoC.replaceAll(/Eek!/g, '')

    //reverse
    let fixedStr = eekLessStr.split('').reverse().join('')

    //secret task
    let tomorrow = fixedStr.split('v')
    let secret = tomorrow.map(el => el[0]).join('')
    return secret
}

//SPACE

cleanup("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"
)

//Day 3

function decrypt(str) {
    return str.replaceAll(/[SPACE]/g, ' ')
}

console.log(decrypt('helloSsirPhowAareCyouEdoing'))

//Day 4

function reverse(str) {
    return str.split('').reverse().join('')
}

console.log(reverse('abc'))

//Day 5

function catAwards(str) {
    //array of titles
    let strArr = str.split(',')
    //no empty spaces at the start or at the end
    let noSpaces = strArr.filter(el => el[0] != ' ' && el[el.length-1] != ' ')
    //doesnt contain bark, dog, or bone in any case
    let noDogs = noSpaces.filter(el => !/dog|bark|bone/ig.test(el))
    //total length of pun cant be a multiple of 5
    let noMultipleOf5 = noDogs.filter(el => el.length % 5 !== 0)
    //sum of the charCodes of the first and last character must be odd
    let oddSumOfChars = noMultipleOf5.filter(el => {
        let sum = el[0].charCodeAt() + el[el.length-1].charCodeAt()
        return sum % 2 !== 0
    })
    //character directly after the middle of the string may not be 'e'
    let noEAfterMiddle = oddSumOfChars.filter(el => {
        let middleIndex = Math.floor(el.length / 2)+1
        console.log(`${el}: ${middleIndex}: ${el[middleIndex]}`)
        return el[middleIndex] !== 'e'
    })
    console.log(noEAfterMiddle)
    //must have an even number of lowercase letters
    let evenNumberofLowercase = noEAfterMiddle.filter(el => el.match(/[a-z]/g).length % 2 === 0)
    //must have at least 2 capital letters
    let has2CapitalLetters = evenNumberofLowercase.filter(el => el.match(/[A-Z]/g).length >= 2)
    //must not contain a capital 'S'
    let doesntContainS = has2CapitalLetters.filter(el => !el.includes('S'))
    return `${doesntContainS}: ${doesntContainS.length}`
}

//COUNT: 3

console.log(catAwards("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"))

//Day 6

function remove(str, num) {
    let fixed = str.split('').filter((_,i) => {
        return (i + 1) % num
    }).join('')
    return fixed
}

console.log(remove("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))
console.log(remove("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))

//Day 7

function opposite(str) {
    let normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let backwards = normal.slice().reverse()
    let fixed = str.split('').map((el,i) => {
        let normalIndex = normal.indexOf(el)
        return backwards[normalIndex] ? backwards[normalIndex] : el
    }).join('')
    return fixed
}

console.log(opposite('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))

//Final
const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
console.log(encryptedMsg)
let step1 = untangle(encryptedMsg)
console.log(step1)
let step2 = decrypt(step1)
console.log(step2)
let step3 = reverse(step2)
console.log(step3)
let step4 = remove(step3, 3)
console.log(step4)
let step5 = opposite(step4)
console.log(step5)