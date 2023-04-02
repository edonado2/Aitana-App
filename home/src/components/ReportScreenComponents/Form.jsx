import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Link } from 'react-router-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment/moment';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const navigation = useNavigation();

  /* Campos a validar */
  const [data, setData] = useState({
    reporterName: '',
    reporterLastname: '',
    reporterCode: '',
    reporterCellphone: '',
    aggressors: [],
    place: '',
    date: '',
    time: '',
    report: '',
    reportType: '',
  });

  const [denounced, setDenounced] = useState({
    denouncedName: '',
    denouncedLastname: '',
    denouncedCode: '',
  });

  const { userId } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    if (
      !data.reporterName ||
      !data.reporterLastname ||
      !data.reporterCode ||
      // !data.denouncedName ||
      // !data.denouncedLastname ||
      // !data.denouncedCode ||
      !data.place ||
      !data.date ||
      !data.time ||
      !data.report ||
      !data.reportType
    ) {
      alert('Por favor, rellene todos los campos.');
      return;
    }
    try {
      const response = await fetch(`http://192.168.3.101:8070/denuncia/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          denunciante: {
            nombre: data.reporterName,
            apellido: data.reporterLastname,
            cedula: data.reporterCode,
            telefono: data.reporterCellphone,
          },
          denunciados: [...data.aggressors],
          denuncias: {
            place: data.place,
            date: data.date,
            time: data.time,
            report: data.report,
            reportType: data.reportType,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'La denuncia se ha creado correctamente',
          'Estaremos en contacto ante cualquier novedad',
          [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
          { cancelable: false }
        );
      } else {
        alert('Denuncia fallida.');
      }
    } catch (error) {
      console.error(error);
      alert('Se ha producido un error al enviar la denuncia.');
    }
  };

  const [reportDate, setReportDate] = useState(new Date());
  const [reportTime, setReportTime] = useState(new Date());

  const [inputBorderColor, setInputBorderColor] = useState({
    reportName: '#E5E7EB',
    reportLastname: '#E5E7EB',
    reportCode: '#E5E7EB',
    reportCellphone: '#E5E7EB',
    reportDenouncedName: '#E5E7EB',
    reportDenouncedLastname: '#E5E7EB',
    reportDenouncedCode: '#E5E7EB',
    reportPlace: '#E5E7EB',
    reportDate: '#E5E7EB',
    reportTime: '#E5E7EB',
    report: '#E5E7EB',
    reportType: '#E5E7EB',
  });

  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const [timePickerIsOpen, setTimePickerIsOpen] = useState('');

  const TABLE_HEADER = ['#', 'Nombre', 'Apellido', 'Cédula', 'Acciones'];

  const onFocus = (name) => {
    setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
  };

  const onBlur = (name) => {
    setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
  };

  const onFocusDatePicker = (name) => {
    setDatePickerIsOpen(true);
    setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
  };

  const onBlurDatePicker = (name) => {
    setDatePickerIsOpen(false);
    setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
  };

  const onFocusTimePicker = (name) => {
    setTimePickerIsOpen(true);
    setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
  };

  const onBlurTimePicker = (name) => {
    setTimePickerIsOpen(false);
    setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
  };

  const onChange = (e, date) => {
    onBlurDatePicker('reportName');
    setData((state) => ({ ...state, date: moment(date).format('YYYY-MM-DD') }));
    setReportDate(date);
  };

  const timeOnChange = (e, time) => {
    const hour = time.getHours() === 0 ? 12 : time.getHours();

    const schedule = hour > 12 && hour <= 23 ? 'PM' : 'AM';

    const formatedTime = `${moment(time).format('hh:mm')} ${schedule}`;

    setData((state) => ({ ...state, time: formatedTime }));
    setTimePickerIsOpen(false);
    setReportTime(time);
  };

  {
    /* Esta función requiere validaciones */
  }
  const onPress = () => {
    alert('Datos registrados con éxito!');

    /* --------------------- Verificar data ... -------------------- */
  };

  const addAggressor = () => {
    if (!denounced.denouncedName) {
      return alert('Campo de nombre de denunciado requerido');
    }

    if (!denounced.denouncedLastname) {
      return alert('Campo de apellido de denunciado requerido');
    }

    if (!denounced.denouncedCode) {
      return alert('Campo de cédula de denunciado requerido');
    }

    if (denounced.denouncedCode.length !== 8) {
      return alert('Longitud del campo de cédula de denunciado incorrecta');
    }

    setData((state) => ({ ...state, aggressors: [...state.aggressors, denounced] }));
    setDenounced({ denouncedName: '', denouncedLastname: '', denouncedCode: '' });

    alert('Demandado agregado.');
  };

  const removeAggressor = (denouncedCode) => {
    setData((state) => ({
      ...state,
      aggressors: state.aggressors.filter((aggressor) => aggressor.denouncedCode !== denouncedCode),
    }));
  };

  const inputStyle = {
    borderWidth: 2,
    padding: 16,
    borderRadius: 4,
    fontSize: 15,
  };

  const reporterNameStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportName,
  };

  const reporterLastnameStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportLastname,
  };

  const reporterCodeStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportCode,
  };

  const reporterCellphone = {
    ...inputStyle,
    borderColor: inputBorderColor.reportCellphone,
  };

  const denouncedNameStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportDenouncedName,
  };

  const denouncedLastnameStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportDenouncedLastname,
  };

  const denouncedCodeStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportDenouncedCode,
  };

  const reportPlaceStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportPlace,
  };

  const reportDateStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportDate,
  };

  const reportTimeStyle = {
    ...inputStyle,
    borderColor: inputBorderColor.reportTime,
  };

  const reportInputStyle = {
    ...inputStyle,
    textAlignVertical: 'top',
    borderColor: inputBorderColor.report,
  };

  const reportTypeStyle = {
    borderWidth: 2,
    padding: 4,
    borderRadius: 4,
    fontSize: 15,
    borderColor: inputBorderColor.reportType,
  };

  const TABLE_DATA = data.aggressors.map(({ denouncedName, denouncedLastname, denouncedCode }, index) => [
    index + 1,
    denouncedName,
    denouncedLastname,
    denouncedCode,
    <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <MaterialIcons name="cancel" size={24} color="red" onPress={() => removeAggressor(denouncedCode)} />
    </View>,
  ]);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff', position: 'absolute' }}>
      <View>
        <Text style={{ width: '100%', height: 50, paddingLeft: 20, paddingTop: 12 }}>
          <Link to="../" style={{ width: 27, height: 27, borderRadius: 50 }}>
            <Text>
              <Icon name="arrow-back-outline" size={27} style={{ backgroundColor: '#fff' }} />
            </Text>
          </Link>
        </Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
            color: '#6B7280',
            fontFamily: 'OpenSans_700Bold',
            textAlign: 'center',
          }}
        >
          Datos del denunciante
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Nombre del denunciante:
          </Text>
          <TextInput
            style={reporterNameStyle}
            placeholder="Primer y segundo nombre"
            onFocus={() => onFocus('reportName')}
            onBlur={() => onBlur('reportName')}
            onChangeText={(text) => setData((state) => ({ ...state, reporterName: text }))}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Apellido del denunciante:
          </Text>
          <TextInput
            style={reporterLastnameStyle}
            placeholder="Primer y segundo apellido"
            onFocus={() => onFocus('reportLastname')}
            onBlur={() => onBlur('reportLastname')}
            onChangeText={(text) => setData((state) => ({ ...state, reporterLastname: text }))}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Cédula del denunciante:
          </Text>
          <TextInput
            style={reporterCodeStyle}
            placeholder="Ingrese su cédula"
            keyboardType="numeric"
            onFocus={() => onFocus('reportCode')}
            onBlur={() => onBlur('reportCode')}
            onChangeText={(text) => setData((state) => ({ ...state, reporterCode: text }))}
            maxLength={8}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Número de télefono del denunciante:
          </Text>
          <TextInput
            style={reporterCellphone}
            placeholder="Ingrese su número de télefono"
            keyboardType="numeric"
            onFocus={() => onFocus('reportCellphone')}
            onBlur={() => onBlur('reportCellphone')}
            onChangeText={(text) =>
              setData((state) => ({
                ...state,
                reporterCellphone: !Number(text) || Number(text) === 'NaN' ? state.reporterCellphone : text,
              }))
            }
            maxLength={11}
          />
        </View>

        <Text
          style={{
            marginVertical: 20,
            fontSize: 20,
            color: '#6B7280',
            fontFamily: 'OpenSans_700Bold',
            textAlign: 'center',
          }}
        >
          Datos del denunciado
        </Text>

        {/* ------------------------- Start---------------------------  */}

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Nombre del denunciado:
          </Text>
          <TextInput
            style={denouncedNameStyle}
            placeholder="Ingresar nombre del denunciado"
            onFocus={() => onFocus('denouncedName')}
            onBlur={() => onBlur('denouncedName')}
            // onChangeText={(text) => setData((state) => ({ ...state, denouncedName: text }))}
            onChangeText={(text) => setDenounced((state) => ({ ...state, denouncedName: text }))}
            value={denounced.denouncedName}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Apellido del denunciado:
          </Text>
          <TextInput
            style={denouncedLastnameStyle}
            placeholder="Ingresar apellido del denunciado"
            onFocus={() => onFocus('denouncedLastname')}
            onBlur={() => onBlur('denouncedLastname')}
            // onChangeText={(text) => setData((state) => ({ ...state, denouncedLastname: text }))}
            onChangeText={(text) => setDenounced((state) => ({ ...state, denouncedLastname: text }))}
            value={denounced.denouncedLastname}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Cédula del denunciado:
          </Text>
          <TextInput
            style={denouncedCodeStyle}
            placeholder="Ingresar la cédula del denunciado"
            keyboardType="numeric"
            onFocus={() => onFocus('denouncedCode')}
            onBlur={() => onBlur('denouncedCode')}
            // onChangeText={(text) => setData((state) => ({ ...state, denouncedCode: text }))}
            onChangeText={(text) => setDenounced((state) => ({ ...state, denouncedCode: text }))}
            value={denounced.denouncedCode}
            maxLength={8}
          />
        </View>

        <Pressable
          style={{
            marginBottom: 32,
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            borderRadius: 24,
            elevation: 3,
            backgroundColor: '#745c98',
          }}
          onPress={addAggressor}
        >
          <Text style={{ fontSize: 16, color: '#fff' }}>Agregar agresor</Text>
        </Pressable>

        {data.aggressors.length > 0 && (
          <View style={styles.container}>
            <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
              Lista de denunciado:
            </Text>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
              <Row data={TABLE_HEADER} style={styles.HeadStyle} textStyle={{ textAlign: 'center', color: '#fff' }} />
              <Rows data={TABLE_DATA} textStyle={styles.TableText} />
            </Table>
          </View>
        )}

        {/* ------------------------- End---------------------------  */}

        <Text
          style={{
            marginVertical: 20,
            fontSize: 20,
            color: '#6B7280',
            fontFamily: 'OpenSans_700Bold',
            textAlign: 'center',
          }}
        >
          Datos de la denuncia
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Tipo de abuso
          </Text>
          <View style={reportTypeStyle}>
            <Picker
              selectedValue={data.reportType}
              onValueChange={(itemValue, itemIndex) => setData((state) => ({ ...state, reportType: itemValue }))}
              onFocus={() => onFocus('reportType')}
              onBlur={() => onBlur('reportType')}
            >
              <Picker.Item label="VIOLENCIA CONTRA LAS MUJERES" value="VIOLENCIA CONTRA LAS MUJERES" />
              <Picker.Item label="VIOLENCIA PSICOLÓGICA" value="VIOLENCIA PSICOLÓGICA" />
              <Picker.Item label="ACOSO U HOSTIGAMIENTO" value="ACOSO U HOSTIGAMIENTO" />
              <Picker.Item label="AMENAZA" value="AMENAZA" />

              <Picker.Item label="VIOLENCIA FÍSICA" value="VIOLENCIA FÍSICA " />
              <Picker.Item label="VIOLENCIA DOMÉSTICA" value="VIOLENCIA DOMÉSTICA" />
              <Picker.Item label="VIOLENCIA SEXUAL" value="VIOLENCIA SEXUAL" />
              <Picker.Item label="ACCESO CARNAL VIOLENTO" value="ACCESO CARNAL VIOLENTO" />

              <Picker.Item label="PROSTITUCIÓN FORZADA" value="PROSTITUCIÓN FORZADA" />
              <Picker.Item label="ESCLAVITUD SEXUAL" value="ESCLAVITUD SEXUAL" />
              <Picker.Item label="VIOLENCIA LABORAL" value="VIOLENCIA LABORAL" />

              <Picker.Item label="VIOLENCIA PATRIMONIAL Y ECONÓMICA" value="VIOLENCIA PATRIMONIAL Y ECONÓMICA" />
              <Picker.Item label="ACOSO SEXUAL" value="ACOSO SEXUAL" />
              <Picker.Item label="VIOLENCIA OBSTÉTRICA" value="VIOLENCIA OBSTÉTRICA" />
              <Picker.Item label="ESTERILIZACIÓN FORZADA" value="ESTERILIZACIÓN FORZADA" />

              <Picker.Item label="VIOLENCIA MEDIÁTICA" value="VIOLENCIA MEDIÁTICA" />
              <Picker.Item label="VIOLENCIA INSTITUCIONAL" value="VIOLENCIA INSTITUCIONAL" />
              <Picker.Item label="VIOLENCIA SIMBÓLICA" value="VIOLENCIA SIMBÓLICA" />
              <Picker.Item
                label="TRÁFICO DE MUJERES, NIÑAS Y ADOLESCENTES"
                value="TRÁFICO DE MUJERES, NIÑAS Y ADOLESCENTES"
              />
              <Picker.Item
                label="TRATA DE MUJERES, NIÑAS Y ADOLESCENTES"
                value="TRATA DE MUJERES, NIÑAS Y ADOLESCENTES"
              />
            </Picker>
          </View>
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Lugar del acontecimiento:
          </Text>
          <TextInput
            style={reportPlaceStyle}
            placeholder="Ingresar lugar del acontecimiento"
            onFocus={() => onFocus('reportPlace')}
            onBlur={() => onBlur('reportPlace')}
            onChangeText={(text) => setData((state) => ({ ...state, place: text }))}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Fecha del acontecimiento:
          </Text>
          <TextInput
            style={reportDateStyle}
            placeholder="Ingresar la fecha del acontecimiento"
            onFocus={() => onFocusDatePicker('reportDate')}
            onBlur={() => onBlurDatePicker('reportDate')}
            value={data.date ? data.date : ''}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Hora del acontecimiento:
          </Text>

          <TextInput
            style={reportTimeStyle}
            placeholder="Ingresar la hora del acontecimiento"
            onFocus={() => onFocusTimePicker('reportTime')}
            onBlur={() => onBlurTimePicker('reportTime')}
            value={data.time}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 16, color: '#6B7280', fontFamily: 'OpenSans_700Bold' }}>
            Denuncia:
          </Text>
          <TextInput
            style={reportInputStyle}
            placeholder="Ingresar la denuncia"
            multiline
            numberOfLines={10}
            onFocus={() => onFocus('report')}
            onBlur={() => onBlur('report')}
            onChangeText={(text) => setData((state) => ({ ...state, report: text }))}
          />
        </View>

        <Pressable
          style={{
            marginBottom: 32,
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            borderRadius: 24,
            elevation: 3,
            backgroundColor: '#745c98',
          }}
          onPress={handleSubmit}
        >
          <Text style={{ fontSize: 16, color: '#fff' }}>Envíar</Text>
        </Pressable>

        {datePickerIsOpen && (
          <DateTimePicker testID="datepicker" value={reportDate} mode="date" is24Hour={true} onChange={onChange} />
        )}

        {timePickerIsOpen && (
          <DateTimePicker testID="timepicker" value={reportTime} mode="time" is24Hour={false} onChange={timeOnChange} />
        )}
      </ScrollView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 18,
    // paddingTop: 35,
    backgroundColor: '#ffffff',
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#745c98',
  },
  TableText: {
    // margin: 10
    textAlign: 'center',
    // color: '#fff',
  },
});
