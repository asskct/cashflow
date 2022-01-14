define([
  'react',
  'jsx!src/auth/Firebase',
], (React, { Firebase, Firestore }) => {
  function isInteger(x) { return typeof x === "number" && isFinite(x) && Math.floor(x) === x; }

  function isFloat(x) { return !!(x % 1); }

  const sortByKey = (fields) => (a, b) => fields.map(o => {
    let dir = 1
    if (o[0] === '-') { dir = -1; o = o.substring(1); }
    return (
      isInteger(Number.parseInt(a[o]))
        ? dir * (Number.parseInt(a[o])) - dir * (Number.parseInt(b[o]))
        : a[o] > b[o]
          ? dir
          : a[o] < b[o] ? -(dir)
            : 0
    )
  }).reduce((p, n) => p ? p : n, 0)

  function formatCurrency(n, c, d, t) {
    //n = String(n).split(".").join("").replace(",", ".")
    c = isNaN(c = Math.abs(c))
      ? 2 : c, d = d == undefined
        ? "," : d, t = t == undefined
          ? "." : t, s = n < 0
            ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3
              ? j % 3 : 0
    return (
      s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
    )
  }



  async function createQuery(db, fieldName, fieldOperator, fieldValue, orderBy, order) {
    const collectionRef = Firestore.collection(db)
    return (
      await collectionRef
        .where(fieldName, fieldOperator, fieldValue)
        // .orderBy(orderBy, 'desc')
        .get()

    )
  }

  function getUsers() {
    return createQuery("users", "age", "<=", 72, "age", 0);
  }

  async function queryDados(collection, fieldName, fieldValue) {
    return await createQuery(collection, fieldName, "==", fieldValue);
  }

  async function addDataBatch(estrutura) {
    var batch = Firestore.batch()
    estrutura.map(strut => {
      const { collection, doc, ...rest } = strut
      const document = Firestore.collection(collection).doc(doc)
      batch.set(document, { ...rest })
    })
    await batch.commit()
  }

  const transaction = ({ collection, type, controle, doc, dados}) => {
    const document = Firestore.collection(controle).doc(doc)
    return Firestore.runTransaction((transaction) => {
      return transaction.get(document).then((sfDoc) => {
        if (!sfDoc.exists) {
          throw "Document does not exist!"
        }
        dados.value = parseFloat(dados.value)
        var newValue = parseFloat(parseFloat(sfDoc.data()[type]) + dados.value).toFixed(2)
        const collectionRef = Firestore.collection(collection).doc()
        transaction.set(collectionRef, { ...dados })
        transaction.update(document, { [type]: newValue })
      })
    }).catch((error) => {
      console.log("Transaction failed: ", error)
    })
  }

  async function setControleBatch(estrutura) {
    estrutura.map(strut => transaction(strut))
  }


  async function getDados() {
    const collectionRef = Firestore.collection("2022/jan/def")
    return await collectionRef.get()
  }


  async function getDadosCollection(collection) {
    const collectionRef = Firestore.collection(collection)
    return await collectionRef.get()
  }

  async function addDados(data) {
    const { collection, dados } = data
    const scope = Firestore.collection("scope").doc("re")
    const collectionRef = Firestore.collection(collection)
    return await collectionRef.add({ scope, ...dados })
  }

  return {
    Firestore,
    sortByKey,
    formatCurrency,
    addDados,
    getUsers,
    queryDados,
    addDataBatch,
    getDados,
    getDadosCollection,
    setControleBatch,
  }

})