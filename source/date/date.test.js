export const test_execute_date = (parts) => {
  const {
    describe,
    it,
    checkEqual,
    isThrown,
    isThrownException,
    testCounter,
  } = parts.test;

  const {
    Today,
    isInvalidDate,
    DateTime,
    datetimeToString,
  } = parts.date;

  const {
    isDate,
  } = parts;

  describe('test_execute_date', () => {

    const test_Today = () => {
      it('test_Today', () => {
        checkEqual((new Date()).toString(), Today().toString());
      });
    };

    const test_isInvalidDate = () => {
      it('test_isInvalidDate', () => {
        checkEqual(true,  isDate(new Date(2020, 11, 21)));
        checkEqual(true,  isDate(new Date('ABC')));

        checkEqual(false, isInvalidDate(new Date(2020, 11, 21)));
        checkEqual(true,  isInvalidDate(new Date('ABC')));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual('NaN',  (new Date('ABC')).toString());
          checkEqual(
            'NaN-NaN-NaNTNaN:NaN:NaN.NZ',
            (new Date('ABC')).toISOString(),
          );
        } else {
          checkEqual('Invalid Date',  (new Date('ABC')).toString());
          checkEqual(true, isThrown(() => {
            (new Date('ABC')).toISOString();
          }));
        }

      });
    };

    const test_Date_standard = () => {
      it('test_Date_standard', () => {
        checkEqual(0, new Date(0).getTime());

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(
            'Thu, 01 Jan 1970 00:00:00 GMT',
            new Date(0).toUTCString(),
          );
        } else {
          checkEqual(
            'Thu, 1 Jan 1970 00:00:00 UTC',
            new Date(0).toUTCString(),
          );
        }

        checkEqual(
          '1970-01-01T00:00:00.000Z',
          new Date(0).toISOString(),
        );

        var dt = new Date(Date.UTC(2020, 10, 21, 11, 35, 10));
        checkEqual(
          '2020-11-21T11:35:10.000Z',
          dt.toISOString(),
        );

      });
    };

    const test_DateTime = () => {
      it('test_DateTime', () => {
        checkEqual(0, new Date(0).getTime());

        var dt = DateTime(
          undefined, undefined, undefined,
          undefined, undefined, undefined, undefined,
          false);
        checkEqual(
          0,
          dt.getTime(),
        );
        checkEqual(
          '1970-01-01T00:00:00.000Z',
          dt.toISOString(),
        );

        var dt = DateTime();
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          0,
          dt.getTime(),
        );
        checkEqual(
          '1970-01-01T00:00:00.000Z',
          dt.toISOString(),
        );

        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-11-21T11:35:10.400Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        checkEqual(
          (new Date(2020, 10, 21, 11, 35, 10, 400)).toISOString(),
          dt.toISOString(),
        );
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400, false);
        checkEqual(
          (new Date(Date.UTC(2020, 10, 21, 11, 35, 10, 400))).toISOString(),
          dt.toISOString(),
        );

        var dt = DateTime(2020);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-01-01T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-01T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:06.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:06.007Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, true);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:06.007Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, false);
        checkEqual(
          '2020-02-03T04:05:06.007Z',
          dt.toISOString(),
        );

        // zero
        var dt = DateTime(2020, 0, 3, 4, 5, 6, 7, false);
        checkEqual(
          '2019-12-03T04:05:06.007Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 3, 0, 4, 5, 6, 7, false);
        checkEqual(
          '2020-02-29T04:05:06.007Z',
          dt.toISOString(),
        );

        // minus
        var dt = DateTime(2020, -1, 3, 4, 5, 6, 7, false);
        checkEqual(
          '2019-11-03T04:05:06.007Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 3, -1, 4, 5, 6, 7, false);
        checkEqual(
          '2020-02-28T04:05:06.007Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 3, 4, -2, 5, 6, 7, false);
        checkEqual(
          '2020-03-03T22:05:06.007Z',
          dt.toISOString(),
        );

        // object parameter
        var dt = DateTime({ year: 2020 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-01-01T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime({ year: 2020, isLocal: false });
        checkEqual(
          '2020-01-01T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime({
          year: 2020, month: 2, hour: 13, second: 59, isLocal: false,
        });
        checkEqual(
          '2020-02-01T13:00:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime({ year: 2020, month: 2, hour: 13, second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-01T13:00:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, { hour: 13, second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-01-01T13:00:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, { hour: 13, second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-01T13:00:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, { minute: 13, second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T00:13:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, { isLocal: false });
        checkEqual(
          '2020-02-03T00:00:00.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, { minute: 13, second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:13:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, { second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, { second: 59 });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(
          '2020-02-03T04:05:59.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6, { isLocal: false });
        checkEqual(
          '2020-02-03T04:05:06.000Z',
          dt.toISOString(),
        );
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, { isLocal: false });
        checkEqual(
          '2020-02-03T04:05:06.007Z',
          dt.toISOString(),
        );

        // exception
        checkEqual(false,
          isThrown(() => DateTime(2020, 2, 3, 4, 5, 6, 7, { isLocal: false })),
        );
        checkEqual(true,
          isThrown(() => DateTime(2020, 2, 3, 4, 5, 6, 7, { isLocal: 1 })),
        );
        checkEqual(true,
          isThrown(() => DateTime(2020, '2', 3, 4, 5, 6, 7, { isLocal: true })),
        );

      });
    };

    const test_datetimeToString = () => {
      it('test_datetimeToString', () => {

        var dt = DateTime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual(
          '2001/02/04 09:05:08.045',
          datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SSS'),
        );
        checkEqual(
          '2001/02/04 09:05:08.04',
          datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SS'),
        );
        checkEqual(
          '2001/02/04 09:05:08.0',
          datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.S'),
        );
        checkEqual(
          '01/2/4 9:5:8 am',
          datetimeToString(dt, 'YY/M/D H:m:s aa'),
        );
        checkEqual(
          '01/2/4 9:5:8 a',
          datetimeToString(dt, 'YY/M/D H:m:s a'),
        );
        var dt = DateTime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual(
          '01/2/4 16:5:8 PM',
          datetimeToString(dt, 'YY/M/D H:m:s AA'),
        );
        checkEqual(
          '01/2/4 16:5:8 P',
          datetimeToString(dt, 'YY/M/D H:m:s A'),
        );
        checkEqual(
          '01/2/4 16:5:8 Sun',
          datetimeToString(dt, 'YY/M/D H:m:s DDD'),
        );
        checkEqual(
          '01/2/4 16:5:8 Sunday',
          datetimeToString(dt, 'YY/M/D H:m:s DDDD'),
        );
        checkEqual(
          '01/2/4 16:5:8 Feb',
          datetimeToString(dt, 'YY/M/D H:m:s MMM'),
        );
        checkEqual(
          '01/2/4 16:5:8 Feb.',
          datetimeToString(dt, 'YY/M/D H:m:s MMMM'),
        );
        checkEqual(
          '01/2/4 16:5:8 February',
          datetimeToString(dt, 'YY/M/D H:m:s MMMMM'),
        );

        // quote
        var dt = DateTime(2021, 1, 6);
        checkEqual(
          'YYYYMMDD = 20210106',
          datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD'),
        );
        checkEqual(
          'YYYYMMDD = 20210106',
          datetimeToString(dt, "'YYYYMMDD = 'YYYYMMDD"),
        );

        // timezone
        const timezoneOffset = -1 * new Date().getTimezoneOffset();
        const timezoneOffsetHour = (0 < timezoneOffset
          ? '+' : ''
        ) + parts.string.paddingFirst(String(Math.floor(timezoneOffset / 60)), 2, '0');
        const timezoneOffsetMin = parts.string.paddingFirst(
          String(timezoneOffset % 60), 2, '0',
        );

        checkEqual(
          timezoneOffsetHour + timezoneOffsetMin, datetimeToString(dt, 'ZZ'),
        );
        // '+0900' etc

        checkEqual(
          timezoneOffsetHour + ':' + timezoneOffsetMin, datetimeToString(dt, 'Z'),
        );
        // '+09:00' etc

        // exception
        // quote
        var dt = DateTime(2021, 1, 6);
        checkEqual(false, isThrown(() => {
          datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(() => {
          datetimeToString(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));

      });
    };


    test_Today();
    test_isInvalidDate();

    test_Date_standard();
    test_DateTime();

    test_datetimeToString();

  });
};

export default {
  test_execute_date,
};
