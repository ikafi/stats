package fi.gosu.ika.stats.service;

import fi.gosu.ika.stats.domain.SpyReport;
import fi.gosu.ika.stats.repository.SpyReportRepository;
import fi.gosu.ika.stats.repository.TownRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * SpyReport Service
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@Service
public class SpyReportService {

    @Autowired private SpyReportRepository spyReportRepository;
    @Autowired private TownRepository townRepository;

    public List<SpyReport> findAll() {
        return spyReportRepository.findAll();
    }

    public SpyReport addSpyReport(SpyReport spyReport) {
        return spyReportRepository.save(spyReport);
    }

    public SpyReport findOne(Long id) {
        return spyReportRepository.findOne(id);
    }
}
